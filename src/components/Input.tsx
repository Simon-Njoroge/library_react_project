import {useForm, SubmitHandler} from "react-hook-form"
import './input.scss'
 export interface Tbook{
  id:number,
  Title:string,
  Author:string,
  Year: String
}

const InputData=()=>{

  const handleFhide=()=>{
    document.body.classList.add("Hinput")
    document.body.classList.remove("showA")
  }
  const {register,handleSubmit}=useForm<Tbook>()
  const onSubmit: SubmitHandler<Tbook>=(data)=>console.log(data)
  return(
    <>
    <form action="" className="grid grid-cols-1 place-items-center border-x-2" id='hiding' onSubmit={handleSubmit(onSubmit)}>
    {/* <label className="input input-bordered flex items-center gap-2">
  Title
</label> */}
<input
 {...register("Title",{required:true})}
  type="text"
  placeholder="Type Title"
  className="input input-bordered input-primary w-full max-w-xs my-1" 
  />

{/* <label className="input input-bordered flex items-center gap-2">
  Author
</label> */}
<input
{...register("Author",{required:true})}
  type="text"
  placeholder="Type Author"
  className="input input-bordered input-primary w-full max-w-xs my-1"  />
{/* <label className="input input-bordered flex items-center gap-2">
  Year
</label> */}
<input
{...register("Year",{required:true})}
  type="text"
  placeholder="Type year"
  className="input input-bordered input-primary w-full max-w-xs my-1" />
  <button className="btn btn-accent my-3" type="submit" onClick={handleFhide}>Submit</button>
 
    </form>
    </>
  )
}
export default  InputData