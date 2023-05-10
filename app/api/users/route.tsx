import { NextResponse } from 'next/server';
import users from "../../../data/users/users.json"

export function GET(): NextResponse {
    const data = users;
    var response = NextResponse.json(data);
    return response;
}