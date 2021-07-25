import { defineEdgeProps } from 'vitedge/define'

export default defineEdgeProps({
  handler({ params = {}, query = {} }) {
    console.log('[params slugs]', params, query)
    return {
      data: {
        server: true,
        msg: `This is individual blog page ${params.resource || ''}`,
      },
    }
  },
  options: {
    cache: {
      api: 90,
      html: 90,
    },
  },
})
