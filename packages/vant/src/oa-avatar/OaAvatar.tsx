import {
  defineComponent,
} from 'vue';
import {createNamespace} from "../utils";

const [name] = createNamespace('oa-avatar');
export default defineComponent({
  name,

  setup(){
    const memberInfo = {
      name: '邹*临',
      job: "软件测试岗",
      approvalDate:'2023-10-08'
    }

    return () => {
      return (
        <div class="member">
          <div class="member-card">
            <img class="member-img" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" alt=""/>
              <div class="member-info">
                <div class="member-name">{memberInfo.name}</div>
                <div class="member-approval-info">
                  <div  class="member-job">{memberInfo.job}</div>
                  <div class="line">|</div>
                  <div class="member-approval-date">{memberInfo.approvalDate}</div>
                </div>
              </div>
          </div>
        </div>
      )
    }
  }
})
