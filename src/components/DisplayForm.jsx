import { useEffect, useState } from "react"
export default function DisplayForm() {

    const [forms, setForms] = useState([])

    useEffect(() => {
        const forms = localStorage.getItem('forms');
        setForms(JSON.parse(forms));
    }, [])
    
    return (
        <>
            {
                forms?.map((val) => {
                    return (
                        <form className="bg-red-600 p-5 flex flex-col max-w-40 min-w-40">
                            <h1 className="text-xl font-bold">Your form</h1>
                            <label>{val?.fieldText}</label>
                            {
                                val?.fieldTypeId == "1" || val?.fieldTypeId == "2" ? (<>
                                    <input type="text" required={val?.required} />
                                </>) : (<></>)
                            }

                            {
                                val?.fieldTypeId == "3" ? (
                                    <>
                                        <select>
                                            {val.options.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </>
                                ) : (
                                    <></>
                                )
                            }

                            {
                                val?.fieldTypeId == "4" ? (
                                    <>
                                        {val.options.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    id={`radio-${index}`}
                                                    name={val.fieldText}  // Same name for all options to group them
                                                    value={option}
                                                />
                                                <label htmlFor={`radio-${index}`}>{option}</label>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )


                            }

                            {
                                val?.fieldTypeId == "5" ? (
                                    <>
                                        {val.options.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`radio-${index}`}
                                                    name={val.fieldText}  // Same name for all options to group them
                                                    value={option}
                                                />
                                                <label htmlFor={`radio-${index}`}>{option}</label>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    <></>
                                )


                            }

                            {
                                val?.fieldTypeId == "6" ? (
                                            <input type="date" />
                                ) : (
                                    <></>
                                )
                            }
                                     {
                                val?.fieldTypeId == "7" ? (
                                            <textarea placeholder="Enter"></textarea>
                                ) : (
                                    <></>
                                )
                            }
                        </form>
                    )
                })
            }
        </>

    )
}