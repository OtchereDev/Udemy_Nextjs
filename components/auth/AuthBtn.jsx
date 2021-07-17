import React from 'react'

function AuthBtn({action,disabled}) {
    return (
        <button disabled={disabled} className="block w-full bg-red-500 my-4 py-3 text-gray-50 rounded font-semibold">
            {action}
        </button>
    )
}

export default AuthBtn
