# posthog-auth-mini
A minimal auth system with user accounts, roles, JWT tokens, protected API routes, and PostHog instrumentation.  

Designed as a complete end-to-end product slice for the PostHog Product Engineer role.

## Database

The backend uses **PostgreSQL**, hosted on **Neon**, via a **direct connection endpoint**.

Neon is used for convenience and fast provisioning, but the application relies only on standard PostgreSQL features and the native `pg` client. There is no coupling to Neon-specific APIs or behavior. The database can be swapped for any Postgres instance, local or hosted, by changing the `DATABASE_URL` environment variable.

Pooled or proxy connections are intentionally avoided to keep behavior deterministic and closer to a traditional Postgres deployment, which simplifies debugging and local development.

## Auth Overview

- User registration with hashed passwords
- JWT-based authentication
- Protected routes using auth middleware
- Database-level enforcement of unique, case-insensitive email addresses
- Minimal JWT payloads and generic auth errors to avoid leaking account state

This service is intentionally scoped to demonstrate core auth and backend concerns without introducing unnecessary complexity.