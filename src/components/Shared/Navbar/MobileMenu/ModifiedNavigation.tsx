// MODIFY THE NAVIGATION WITH NEW STRUCTURE
export const updateNavigation = (navigation: any) => {
  return navigation.map((curr: any) => {
    if (curr.megaMenu || curr.megaMenuWithSub) {
      const flatChild = curr.child.flat()
      return {
        title: curr.title,
        child: flatChild,
      }
    }
    return {
      title: curr.title,
      child: curr.child,
    }
  })
}
