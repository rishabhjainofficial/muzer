"use client"
import { signIn } from 'next-auth/react';

const Appbar = () => {
    return (
        <div>
            <div className="flex justify-between">
                <div>
                    Muzi
                </div>
                <div>
                    <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}></button>
                </div>
            </div>
        </div>
    )
}

export default Appbar;