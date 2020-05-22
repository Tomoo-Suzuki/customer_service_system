// import {
//   form_validate,
//   form_controll
// } from '_redux/actions/action';

import * as regs from './regularExpressions'
import * as logics from './logics'

const text_error = {
  required: {
    first_name: '名前は必須項目です',
    last_name: '苗字は必須項目です',
    first_name_kana: 'フリガナ(名)は必須項目です',
    last_name_kana: 'フリガナ(苗字)は必須項目です',
    tel: '電話番号は必須項目です',
    email: 'メールは必須項目です',
    email_confirm: 'メール(確認)は必須項目です',
    prefecture: '都道府県は必須項目です。',
    zip: '郵便番号は必須項目です',
    city: '市区町村は必須項目です',
    address3: '番地は必須項目です',
    gender: 'ジェンダーは必須項目です',
    birthday: 'お誕生日は必須項目です。'
  }
};

const validator = (e, dispatch) => {
  const is_required = e.target.required;
  // console.log(is_required)
  const name = e.target.name;
  // console.log(name)
  let value = e.target.value;
  const tempHash = {}
  tempHash.key = name;
  if (value) {
    value = logics.trim_space(value);
    value = logics.delete_htmlspecialchars(value);
  }
  // console.log(value)
  if (is_required) {
    const res = logics.check_empty(value);
    if (res) {
      tempHash.val = text_error.required[name];
      dispatch("updateErrorMsg", tempHash);
    } else {
      tempHash.val = '';
      dispatch("updateErrorMsg", tempHash);
    }
  }
  tempHash.val = value;
  dispatch("updateFormAccount", tempHash);
  if (value) {

    if (name === 'last_name_kana' || name === 'first_name_kana') {
      const is_kana = regs.katakana_all.test(value);
      if (!is_kana) {
        tempHash.val = 'カタカナのご入力をお願いいたします。';
        dispatch("updateErrorMsg", tempHash);
      }
    }
    if (name === 'email') {
      const is_email = regs.email.test(value);
      if (!is_email) {
        tempHash.val = 'emailアドレスをご入力ください。';
        dispatch("updateErrorMsg", tempHash);
      }
    }
    if (name === 'email_confirm') {
      const is_email = regs.email.test(value);
      if (!is_email) {
        tempHash.val = 'emailアドレスをご入力ください。';
        dispatch("updateErrorMsg", tempHash);
      }
    }


  }


}
export default validator;