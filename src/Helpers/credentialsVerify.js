function credentialsVerify(user, pass) {
  /** Para realizar o uso de verificação do email, tive que usar o regex pattern
   * para verificação de email abaixo:
   * Source: https://forum.blip.ai/t/resolvido-regex-para-validacao-de-email/1635 */
  const emailPattern = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;

  const userRegex = emailPattern.test(user);
  const passwordLength = 7;

  if (userRegex && pass.length >= passwordLength) {
    return false;
  }
  return true;
}

export default credentialsVerify;
