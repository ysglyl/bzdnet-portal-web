import post from '@/utils/post'

/**
 *  获取全部
 * @param params
 * @returns {Promise<void>}
 */
export async function httpAppAllList(params) {
  return post('/portal/app/allList', params);
}
