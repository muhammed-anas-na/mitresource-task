import { useState } from "react"
export default function NewForm(){
    const [formData, setFormData] = useState({
        fieldTypeId:"",
        fieldText:"",
        options:[],
        width:"",
        required: false,
    })

    function handleChange(e){
        setFormData({...formData , fieldTypeId:e})
    }

    function handleOptions(e){
        const data = e.target.value;
        const r = data.split(",")
        setFormData({...formData, options:r})
    }

    function handleCreateForm(){
        const existingForms = JSON.parse(localStorage.getItem('forms')) || [];
        existingForms.push(formData);
        localStorage.setItem('forms', JSON.stringify(existingForms));
        location.reload();
    }
    return(
        <div className="bg-slate-300 absolute right-0 h-screen p-5 w-[30%] flex flex-col justify-start">
            <h1>Create new form</h1>
            
            <label htmlFor="">Name</label>
            <select name="" id="" onChange={(e)=>{handleChange(e.target.value)}}>
                <option value="">Select an option</option>
                <option value="1">ShortTextResponse</option>
                <option value="2">LongTextResponse</option>
                <option value="3">DropDown</option>
                <option value="4">Checkbox</option>
                <option value="5">RadioButton</option>
                <option value="6">Date</option>
                <option value="7">Note</option>
            </select>
            <label htmlFor="question">Question ?</label>
            <textarea name="question" id="question" placeholder="Enter your question" value={formData.fieldText} onChange={(e)=>setFormData({...formData, fieldText:e.target.value})}></textarea>

            {
                formData?.fieldTypeId == "3" || formData?.fieldTypeId == "4" || formData?.fieldTypeId == "5"? (<>
                    <label>Values</label>
                    <input type="text"  className="border" placeholder="Enter values separateed by comma" onChange={(e)=>{
                        handleOptions(e);
                    }}/>
                </>) : (<></>)
            }
            <div className="flex">
            <input type="checkbox" name="required" id="" onChange={()=>{setFormData({...formData, required:true})}} checked={formData.required}/>
            <label htmlFor="">Required</label>
            </div>

            <button className="bg-green-900 text-white my-10 py-3" onClick={handleCreateForm}>Create Form</button>
        </div>
    )
}