export function emailHandling(data: string) {
  if (data.length >= 13)
    if (
      data.includes('@gmail.com') ||
      data.includes('@hotmail.com') ||
      data.includes('@outlook.com')
    )
      return true;
    else {
      return false;
    }
}
