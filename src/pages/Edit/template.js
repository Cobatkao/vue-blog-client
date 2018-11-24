import blog from '@/api/blog';

export default {
    data() {
        return {
            title: '',
            blogId: null,
            description: '',
            content: '',
            atIndex: false,
            tLength: '',
            cLength: '',
            dLength: ''
        }
    },
    //初始化前获取当前博客信息
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({
            blogId: this.blogId
        }).then(res => {
            this.title = res.data.title
            this.description = res.data.description
            this.content = res.data.content
            this.atIndex = res.data.atIndex
        })
    },
    methods: {
        OnEdit() {
            blog.updateBlog({
                    blogId: this.blogId
                }, {
                    title: this.title,
                    content: this.content,
                    description: this.description,
                    atIndex: this.atIndex
                })
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: res.msg
                    })
                    this.$router.push({
                        path: `/detail/${res.data.id}`
                    })
                })
        },
    },
    computed: {
        computedTLen() {
            return this.title.replace(/[^\x00-\xff]/g, '01').length
        },
        computedDLen() {
            return this.description.replace(/[^\x00-\xff]/g, '01').length
        },
        computedCLen() {
            return this.content.replace(/[^\x00-\xff]/g, '01').length
        },
    }
}
