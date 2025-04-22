export default function Form(){
    const handleSubmit = async (formData: FormData) => {
        'use server'    
        const login = formData.get('login');        
        const password = formData.get('password');
        console.log('Login:', "login");
        console.log('Password:', password);             
    }
        // Perform login logic here, e.g., call an API or validate credentials
        // For demonstration purposes, we'll just log the values
    return<div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
        <form  action={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto mt-10">
        <label>Login:</label>
        <input type="text" name="login" id="login" className="border border-gray-300 rounded-md px-3 py-2"/>
        <label>Password:</label>    
        <input type="password" name="password" id="password" className="border border-gray-300 rounded-md px-3 py-2"/>
        <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4">Submit</button>
        </form>
    </div>
}