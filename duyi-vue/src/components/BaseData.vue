
<script>
import BaseChlidren from './BaseChildren';
import BaseIfFor from './BaseIfFor';
import BaseModel from './BaseModel';
export default {
    components:{
        BaseChlidren,
        BaseIfFor,
        BaseModel
    },
    render(createElement){
        return createElement('div',{
            class:{
                foo:true,
                bar:false
            },
            style:{
                fontSize:'40px',
                color:'red'
            },
            attrs:{
                id:'a'
            }
        },['xxx',
        createElement('base-chlidren',{
            props:{
                name:'base-chlid组件'
            }
        },[
            createElement('p',{
                slot:'default'
            },'默认插槽'),
            createElement('div',{
                slot:'header'
            },'具名插槽')
        ]),
        createElement('h2',{
            domProps:{
                innerHTML:`<span>牛</span>`
            },
            on:{
                click:function(e){
                    console.log(e.target)
                }
            },

        },),
        createElement('base-if-for',{
            props:{
                items:['a','b']
            }
        }),
        createElement('base-model'),
        ])
    }
}
</script>