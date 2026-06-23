import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'


import 'react-toastify/dist/ReactToastify.css'


const Manager = () => {

  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  const API = "https://vaultify-1-l9s6.onrender.com";

  const getPass =async () =>{
    let req = await fetch(`${API}/`)
    let passwords = await req.json()
    setpasswordArray(passwords)
  }

  useEffect(() => {
    getPass()
    
  }, [])

  const copyText=(text, type)=>{
    navigator.clipboard.writeText(text)
    toast.success(`${type} copied`);
  }


  const showPassword = () => {

    if (ref.current.src.includes("icons/eyeclosed.svg")) {
      ref.current.src = "icons/eye.svg"
      passwordRef.current.type = "text"
    }
    else {
      ref.current.src = "icons/eyeclosed.svg"
      passwordRef.current.type = "password"
    }

  }


  const savePass = async() => {
    const newPass = {...form, id: uuidv4()}
    if(newPass.site.trim() && newPass.username.trim() && newPass.password.trim()){
      setpasswordArray([...passwordArray, newPass])
      let res = await fetch(`${API}/`,{method: "POST", headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newPass) })
      setform({site: "", username: "", password: ""})
      toast.success("Password saved!");
    }
    else{
      toast.error("All fields are required!");
    }    
  }

  const deletePass = async (id) => {
  let c = confirm("Are you sure you want to delete?");
  if (c) {
    setpasswordArray(passwordArray.filter(item => item.id !== id));

    await fetch(`${API}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    toast.success("Password deleted!");
  }
};

  const editPass = async(id) => {
    const pass = passwordArray.find(i => i.id === id);

    setform({
        site: pass.site,
        username: pass.username,
        password: pass.password,
    });

    setpasswordArray(passwordArray.filter(item=>item.id!==id)) 
    await fetch(`${API}/`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
});                       
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
          
      <div className=" mx-auto pt-10 max-w-6xl">

        <div className='flex justify-center'>
           <h1 className='text-lg font-bold'>Vault </h1>
          <h1 className='text-lg font-bold text-green-700'>ify 🔐</h1>
        </div>

       

        <p className='text-center'> Securely store, manage and access your passwords from one place.</p>

        <div className="flex flex-col p-4 gap-2 pt-10">
          <input value={form.site} onChange={handleChange} className='bg-white w-full rounded-full border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Enter Website URL' type="text" name="site" />
          <div className="flex flex-col md:flex-row gap-2">
            <input name="username" value={form.username} onChange={handleChange} className='bg-white w-full rounded-full border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Enter Username' type="text" />
            <div className="relative w-full mx-auto flex items-center">
              <input ref={passwordRef} name="password" value={form.password} onChange={handleChange} className='bg-white w-full rounded-full border border-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Enter Password' type="password" />
              <span className='absolute right-0 top-1 pr-1' onClick={showPassword}>
                <img ref={ref} className='cursor-pointer' width={25} src="icons/eyeclosed.svg" alt="eye" />
              </span>
            </div>
          </div>
        </div>
        <button onClick={savePass} className='flex justify-center items-center mt-10 px-4 py-2 gap-2 rounded-full bg-green-700 w-[90vw] md:w-fit mx-auto  cursor-pointer hover:bg-green-800 text-white'>
          <lord-icon
            src="https://cdn.lordicon.com/gzqofmcx.json"
            trigger="hover"
            colors="primary:#ffffff"
          >
          </lord-icon>
          Save
        </button>

        <div className="passwords mt-5">
          <h2 className='font-bold p-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div className='text-center'>Nothing to display</div>} 
          {passwordArray.length != 0 && 

          <div className='overflow-x-auto mx-3 rounded-lg'>

          <table className="min-w-max w-full">
            <thead className='bg-blue-950 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Action</th>
                
              </tr>
            </thead>
            <tbody className='bg-blue-100'>
              {passwordArray.map((item)=>{
                
                return <tr key={item.id}>
                  <td className='py-2 px-4'>
                    <div className='flex items-center'>
                      <span className='flex-1 text-center'>
                        <a href={item.site} target='_blank'>{item.site}</a>
                      </span>
                      <span className="material-symbols-outlined cursor-pointer" onClick={()=>{copyText(item.site, "URL")}}>content_copy</span>
                    </div>
                  </td>
                  <td className='py-2 px-4'>
                    <div className='flex items-center'>
                      <span className='flex-1 text-center'>
                        {item.username}
                      </span>
                      <span className="material-symbols-outlined cursor-pointer" onClick={()=>{copyText(item.username, "Username")}}>content_copy</span>
                    </div>
                  </td>
                  <td className='py-2 px-4'>
                    <div className='flex items-center'>
                      <span className='flex-1 text-center'>
                        {"*".repeat(item.password.length)}
                      </span>
                      <span className="material-symbols-outlined cursor-pointer" onClick={()=>{copyText(item.password, "Password")}}>content_copy</span>  
                    </div>
                  </td>
                  <td>
                    <div className='flex items-center gap-2 justify-center'>
                      <span onClick={()=>{editPass(item.id)}} className="material-symbols-outlined cursor-pointer">edit</span>
                      <span onClick={() => deletePass(item.id)} className="material-symbols-outlined cursor-pointer">delete</span>
                    </div>
                  </td>
                  
                </tr>

})} 
              
            </tbody>
          </table>
          </div>
}

        </div>

      </div>
    </>
  )
}

export default Manager
