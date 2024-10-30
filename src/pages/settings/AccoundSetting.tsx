import './AccoundSetting.css';
import { useState } from 'react';
import axios from 'axios';
import FormInput from './FormInput';

const API_BASE_URL: string = "https://game.telast.tech/api";

function AccountSetting() {
  const [passwords, setPasswords] = useState({
    old_password: '',
    new_password1: '',
    new_password2: '',
  });
  const [message, setMessage] = useState('');

  function handleOldPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswords({ ...passwords, old_password: e.target.value });
  }
  function handleNewPasswordOne(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswords({ ...passwords, new_password1: e.target.value });
  }
  function handleNewPasswordTwo(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswords({ ...passwords, new_password2: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage('');
    if (passwords.new_password1 !== passwords.new_password2) {
      alert('New passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/password/change/`, passwords, { withCredentials: true });
      console.log(response);
      setMessage('Password changed successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Failed to change password. Please try again.');
    }
  }

  const formInputs = [
    {
      header: 'Current Password',
      placeHolder: 'Your old password',
      id: 'current-password',
      handler: handleOldPassword,
    },
    {
      header: 'New Password',
      placeHolder: 'Your new password',
      id: 'current-password-one',
      handler: handleNewPasswordOne,
    },
    {
      header: 'Repeat New Password',
      placeHolder: 'Repeat your new password',
      id: 'current-password-two',
      handler: handleNewPasswordTwo,
    },
  ];

  return (
    <div className="account-setting gap-[15px] border-[2px] flex-1 bg-white border-[#EAEBF0] xl:mr-[10px] p-[20px]">
      <h1 className='text-[20px] font-bold'>Account Settings</h1>
      <span className='text-[grey]'>Change your password</span>

      <div className="submit-form h-[95%] content-center">
        <form className='w-[90%] mx-auto' onSubmit={handleSubmit}>
          {formInputs.map((input) => (
            <FormInput
              key={input.id}
              header={input.header}
              placeHolder={input.placeHolder}
              id={input.id}
              handler={input.handler}
            />
          ))}
          <button type="submit" className="btn-submit bg-[#e83d3d] p-[10px] text-white font-bold rounded-[10px]">
            Change Password
          </button>
          {message && <p className="mt-[15px] text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AccountSetting;
