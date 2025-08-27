import connectDB from "@/app/lib/connectDb";
import Text from "@/app/models/Text";
import { NextResponse } from "next/server";
import crypto from "crypto";

const algorithm = "aes-256-ctr";
const secretKey = process.env.SECRET_KEY || "12345678901234567890123456789012";

function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(hash) {
  const parts = hash.split(":");
  const iv = Buffer.from(parts.shift(), "hex");
  const content = Buffer.from(parts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);
  return decrypted.toString();
}

export async function POST(req) {
  const body = await req.json();

  if (!body.text) {
    return NextResponse.json({ message: "text is required" });
  }

  await connectDB();

  const encryptedText = encrypt(body.text);

  let sixDigitId;
  let isUnique = false;
  while (!isUnique) {
    sixDigitId = Math.floor(100000 + Math.random() * 900000);
    const exists = await Text.findOne({ textId: sixDigitId });
    if (!exists) isUnique = true;
  }

  const text = await Text.create({
    textId: sixDigitId,
    text: encryptedText,
  });

  return NextResponse.json({ message: "success", textId: sixDigitId });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ message: "id is required" });
  }

  await connectDB();

  const stored = await Text.findOne({ textId: id });

  if (!stored) {
    return NextResponse.json({ message: "text not found" });
  }

  const originalText = decrypt(stored.text);

  return NextResponse.json({ message: "success", text: originalText });
}

