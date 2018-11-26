import blog from '@/api/blog';

export default {
    data() {
        return {
            title: '',
            description: '',
            content: '',
            atIndex: false,
            tLength: '',
            cLength: '',
            dLength: ''
        }
    },
    methods: {
        OnCreate() {
            blog.createBlog({
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
        // Clen() {
        //     var len = 0;  
        //     for (var i=0; i<this.length; i++) {  
        //         if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {  
        //              len += 2;  
        //          } else {  
        //              len ++;  
        //          }  
        //      }
        //     return len;
        //   }
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
