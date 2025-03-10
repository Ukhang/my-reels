import { NextRequest, NextResponse } from "next/server";
import { connectionToDatabase } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required!" },
                { status: 400 }
            );
        }

        await connectionToDatabase();

        const existingUser = await User.findOne({ email }); 
        if (existingUser) {
            return NextResponse.json(
                { error: "Email is already registered!" },
                { status: 400 }
            );
        }

        await User.create({
            email,
            password
        });

        return NextResponse.json(
            { message: "User registered successfully" }, 
            { status: 201 }
        );

    } catch (err: unknown) {
        if (err instanceof Error) {
            return NextResponse.json(
                { error: err.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { error: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
}