import os

from dotenv import load_dotenv

from fastapi import Header, HTTPException

from supabase import create_client, Client



# =========================
# Load Environment Variables
# =========================

load_dotenv()



# =========================
# Supabase Configuration
# =========================

SUPABASE_URL = os.getenv(
    "SUPABASE_URL"
)

SUPABASE_ANON_KEY = os.getenv(
    "SUPABASE_ANON_KEY"
)



if not SUPABASE_URL or not SUPABASE_ANON_KEY:

    raise RuntimeError(
        "SUPABASE_URL and SUPABASE_ANON_KEY must be configured in backend .env"
    )



supabase: Client = create_client(

    SUPABASE_URL,

    SUPABASE_ANON_KEY

)



# =========================
# Current User Authentication
# =========================

async def get_current_user(

    authorization: str | None = Header(None)

):


    # =========================
    # Check Authorization Header
    # =========================

    if not authorization:

        raise HTTPException(

            status_code=401,

            detail="Missing authentication token"

        )



    # =========================
    # Extract Bearer Token
    # =========================

    try:

        scheme, token = authorization.split(

            " ",

            1

        )


        if scheme.lower() != "bearer":

            raise HTTPException(

                status_code=401,

                detail="Invalid authentication scheme"

            )


        if not token.strip():

            raise HTTPException(

                status_code=401,

                detail="Empty authentication token"

            )


    except ValueError:

        raise HTTPException(

            status_code=401,

            detail="Invalid token format"

        )



    # =========================
    # Verify Token With Supabase
    # =========================

    try:

        response = supabase.auth.get_user(

            token

        )


    except Exception:

        raise HTTPException(

            status_code=401,

            detail="Invalid or expired authentication token"

        )



    # =========================
    # Get User
    # =========================

    user = response.user



    if not user:

        raise HTTPException(

            status_code=401,

            detail="User not found"

        )



    # =========================
    # Return Stable User Data
    # =========================

    return {

        "id": str(user.id),

        "email": user.email

    }