export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url);
    url.hostname = "xxxj.deployra.app"; // 换成你的真实后端地址
    
    // 保留原始 Host 头，除非后端就是靠 Host 做区分/校验
    let new_headers = new Headers(request.headers);
    
    let new_request = new Request(url, {
      method: request.method,
      headers: new_headers,
      body: request.body,
      redirect: 'manual'
    });
    
    return await fetch(new_request);
  },
};
