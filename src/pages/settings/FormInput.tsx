function FormInput({ header, placeHolder, handler, id }: { header: string; placeHolder: string; handler?: (e: React.ChangeEvent<HTMLInputElement>) => void; id: string; }) {
  return (
    <div className='lg:w-[60%] mb-[25px]'>
      <label className='block mb-[10px]' htmlFor={id}>{header}</label>
      <input
        className='border w-[90%] outline-none border-[#c1c0c0] pl-[10px] py-[10px] rounded-[10px]'
        type="password"
        id={id}
        placeholder={placeHolder}
        onChange={handler}
      />
    </div>
  );
}

export default FormInput;