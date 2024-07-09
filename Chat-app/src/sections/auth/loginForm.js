import React from 'react'

function LoginForm() {
  return (
    <form onSubmit={handleSubmit(form_submit)}>
        <label id={id}>firstName</label>
        <input
          id={id}
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"} 
        />
        {errors.firstName?.type === "required" && (
          <p role="alert">First name is required</p>
        )}
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
  )
}

export default LoginForm