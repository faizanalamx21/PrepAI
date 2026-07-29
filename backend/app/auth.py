from fastapi import Header, HTTPException


async def get_current_user(

    authorization: str | None = Header(None)

):


    if not authorization:

        raise HTTPException(

            status_code=401,

            detail="Missing authentication token"

        )


    try:

        scheme, token = authorization.split(" ")


        if scheme.lower() != "bearer":

            raise Exception()


    except:

        raise HTTPException(

            status_code=401,

            detail="Invalid token format"

        )


    # Temporary user extraction
    # We will connect Supabase verification next

    return {

        "id": token

    }