



export default function ErrorMessages({ error, success }) {
    return (
        <div className="bg-slate-100 flex flex-col">
            {error
                && error.map
                    ((e) => (<div className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`} >{e}</div>))}

        </div>
    )
}