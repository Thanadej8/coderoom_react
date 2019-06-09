import Loadable from 'react-loadable'

import PageLoader from '@components/PageLoader'

export default ({ loader, loading = PageLoader }) => {
  const options = {
    loader,
    loading,
    delay: 200,
    timeout: 10000,
  }
  return Loadable(options)
}
