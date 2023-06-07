import React, { useMemo, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ name, flag, setFlag }) => {


  const localStorageData = JSON.parse(localStorage.getItem('userDetails'))
  const defaultValues = useMemo(
    () => ({
      moviename: name,
      username: localStorageData?.username || '',
      email: localStorageData?.email || ''
    }), [
    localStorageData
  ]
  )


  const method = useForm({ defaultValues });
  const { register, handleSubmit, reset, formState: { errors }, } = method


  const onSubmit = async (data) => {

    await localStorage.setItem('userDetails', JSON.stringify(data))
    alert('Ticket Booked!');
    setFlag(false)
  };

  const handleCancel = () => {
    setFlag(false)
  }


  return (
    <>
      {flag &&
        <div id='div' className='d-flex flex-column m-auto border border-dark p-4 mt-4' style={{ width: '30rem', backgroundColor: 'white' }}>
          <div>
            <h2>Booking Form</h2></div>
          <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Movie Name</label>
                <input type="text" className="form-control" id="name" {...register('moviename', { required: true })} autoComplete='off' disabled /> <br />
                {errors.name && <span>This field is required!</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Username</label>
                <input type="text" className="form-control" id="name"  {...register('username', { required: true })} autoComplete='off' /> <br />
                {errors.username && <span>This field is required!</span>}
              </ div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email"
                  {...register('email',
                    {
                      required: 'This field is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    }
                  )}
                  autoComplete='off' />
                <br />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className='d-flex'>
                <button type="submit" className="btn btn-primary">Book</button>
                <button type="button" onClick={handleCancel} className="btn btn-primary" style={{ marginLeft: '0.5rem' }}>Cancel</button>
              </div>
            </form>
          </FormProvider>
        </div>}
    </>
  );
}
export default Form