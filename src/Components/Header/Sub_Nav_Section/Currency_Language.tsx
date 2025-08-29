
export default function Currency_Language() {
  return (
    <div className="flex gap-3">
                    {/*Selected Curancy*/}
                    <select name="" id=""  >
                        <option value="USD" selected>USD</option>
                        <option value="EUR" >EUR</option>
                        <option value="SAR" >SAR</option>
                        <option value="EGP" >EGP</option>
                        <option value="KWD" >KWD</option>
                        <option value="QAR" >QAR</option>
                    </select>
                    {/*Selected Language*/}
                    <select name="" id=""  >
                        <option value="English" selected>English</option>
                        <option value="العربية" >العربية</option>
                        <option value="Français" >Français</option>
                        <option value="Español" >Español</option>
                        <option value="Italiano" >Italiano</option>
                        <option value="Português" >Português</option>
                    </select>
                </div>
  )
}
