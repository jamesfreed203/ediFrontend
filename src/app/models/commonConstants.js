export const bearerToken = process.env.NEXT_PUBLIC_API_AUTH_TOKEN;

export const apiRoutes = {
    "getPlansData": `${process.env.NEXT_PUBLIC_API_URL}/api/v1/plans`,
    "registerUser": `${process.env.NEXT_PUBLIC_API_URL}/api/v1/register`,
}