export function emailHandling(email: string, errorState: string | undefined) {
  if (email.length >= 13 && !errorState)
    if (
      email.includes('@gmail.com') ||
      email.includes('@hotmail.com') ||
      email.includes('@outlook.com')
    )
      return true;
    else {
      return false;
    }
}
