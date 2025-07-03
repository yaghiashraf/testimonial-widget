/**
 * Helper functions for user state flags
 */

export const getUserFlags = () => {
  return {
    isPaid: localStorage.getItem('paid') === 'true',
    hasVisitedBuilder: localStorage.getItem('visitedBuilder') === 'true',
    cookiesAccepted: localStorage.getItem('cookiesAccepted') === 'true'
  }
}

export const setUserFlag = (flag: 'paid' | 'visitedBuilder' | 'cookiesAccepted', value: boolean) => {
  localStorage.setItem(flag, value.toString())
}

export const shouldShowUpgradeButton = (): boolean => {
  const { isPaid, hasVisitedBuilder } = getUserFlags()
  return !isPaid && hasVisitedBuilder
}