export const Footer = () => {
  return (
    <footer className='text-ttWhite mt-30 w-full bg-[#5E5E5E] py-7 text-nowrap'>
      <div className='mx-auto flex max-w-[1640px] items-center justify-between px-10 max-sm:flex-col max-sm:gap-5'>
        <span className='text-base font-extrabold'>TASK TYCOON</span>
        <address className='flex items-center gap-6 text-xs not-italic max-sm:flex-col'>
          <a href='mailto:d.ryzhik@dppm.pro'>Эл. почта: d.ryzhik@dppm.pro</a>
          <a href='https://t.me/ZinixZay'>Tg: @ZinixZay</a>
        </address>
      </div>
    </footer>
  )
}
