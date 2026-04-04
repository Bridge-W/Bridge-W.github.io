import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    try {
        // 从 Vercel Analytics API 获取数据
        // 需要 VERCEL_ANALYTICS_ID 环境变量
        const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

        if (!analyticsId) {
            // 如果没有配置，返回模拟数据或从其他来源获取
            return new Response(JSON.stringify({
                visitors: 1000,
                pageViews: 5000,
                sources: []
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // 调用 Vercel Analytics API
        const response = await fetch(`https://vitals.vercel-analytics.com/v2/${analyticsId}/data`, {
            headers: {
                'Authorization': `Bearer ${import.meta.env.VERCEL_ANALYTICS_API_TOKEN}`
            }
        });

        const data = await response.json();

        return new Response(JSON.stringify({
            visitors: data.visitors || 1000,
            pageViews: data.pageViews || 5000,
            sources: data.sources || []
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        return new Response(JSON.stringify({
            error: 'Failed to fetch stats',
            visitors: 1000 // 后备数据
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};