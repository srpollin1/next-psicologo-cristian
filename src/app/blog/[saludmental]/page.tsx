import React from "react";

export default function Page({ params }: { params: { saludMental: string } }) {
    return <div>My Post: {params.saludMental} jeje </div>
}