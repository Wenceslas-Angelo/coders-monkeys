import request from "supertest";
import { describe, it, expect, beforeEach } from "vitest";
import app from "../app";
import User from "../models/user.model";

const testUser = {
  username: "testuser",
  email: "test@example.com",
  password: "password123",
};

beforeEach(async () => {
  // reset la collection User à chaque test
  await User.deleteMany({});
});

describe("Auth Routes", () => {
  it("should sign up a new user", async () => {
    const res = await request(app).post("/api/auth/signup").send(testUser);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("User signed up successfully");
  });

  it("should not allow duplicate email", async () => {
    await request(app).post("/api/auth/signup").send(testUser);

    const res = await request(app).post("/api/auth/signup").send(testUser);

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toContain("User already exists");
  });

  it("should sign in with valid credentials", async () => {
    await request(app).post("/api/auth/signup").send(testUser);

    const res = await request(app).post("/api/auth/signin").send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.user).toMatchObject({
      email: testUser.email,
      username: testUser.username,
    });
  });

  it("should fail signin with wrong password", async () => {
    await request(app).post("/api/auth/signup").send(testUser);

    const res = await request(app).post("/api/auth/signin").send({
      email: testUser.email,
      password: "wrongpassword",
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBe("Invalid credentials");
  });

  it("should fail signin with non-existent email", async () => {
    const res = await request(app).post("/api/auth/signin").send({
      email: "notexist@example.com",
      password: "whatever",
    });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBe("Invalid credentials");
  });
});
