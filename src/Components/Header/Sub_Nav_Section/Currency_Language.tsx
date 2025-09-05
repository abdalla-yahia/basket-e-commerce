
export default function Currency_Language() {
  return (
    <div className="hidden md:flex gap-3">
                    {/*Selected Curancy*/}
                    <select name="" id=""  >
                        <option  value="USD" selected>USD</option>
                        {/* <option disabled value="EUR" >EUR</option>
                        <option disabled value="SAR" >SAR</option>
                        <option disabled value="EGP" >EGP</option>
                        <option disabled value="KWD" >KWD</option>
                        <option disabled value="QAR" >QAR</option> */}
                    </select>
                    {/*Selected Language*/}
                    <select name="" id=""  >
                        <option  value="English" selected>English</option>
                        {/* <option disabled value="العربية" >العربية</option>
                        <option disabled value="Français" >Français</option>
                        <option disabled value="Español" >Español</option>
                        <option disabled value="Italiano" >Italiano</option>
                        <option disabled value="Português" >Português</option> */}
                    </select>
                </div>
  )
}
