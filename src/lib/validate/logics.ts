export const checkEmpty = (v: string) => {
  return v === "";
};

export const trimSpace = (v: string) => {
  v = v.replace(/\s+/g, "");
  return v;
};

export const htmlspecialchars = (v: string) => {
  v = v.replace(/&/g, "&amp;");
  v = v.replace(/"/g, "&quot;");
  v = v.replace(/'/g, "&#039;");
  v = v.replace(/</g, "&lt;");
  v = v.replace(/>/g, "&gt;");
  return v;
};

export const deleteHtmlspecialchars = (v: string) => {
  v = v.replace(/&/g, "");
  v = v.replace(/"/g, "");
  v = v.replace(/'/g, "");
  v = v.replace(/</g, "");
  v = v.replace(/>/g, "");
  v = v.replace(/,/g, "");
  return v;
};

export const deleteNewLine = (v: string) => {
  v = v.replace(/\r?\n/g, "");
  return v;
};

export const numConversion = (v: string) => {
  return v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s: string) {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });
};
