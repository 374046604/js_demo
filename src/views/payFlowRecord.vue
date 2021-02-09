<template>
	<div id="activity_gift_payFlowRecord">
		<betterScroll
				class="wrapper"
				:data="listFormat"
				:pulldown="true"
				:pullup="true"
				:click="true"
				@pulldown="pulldown"
				@pullup="pullup">
			<div class="content">
				<img v-if="!(todayData&&todayData.totalExpendAmount||todayData&&todayData.totalIncomeAmount)"
					 class="no_list" src="https://km-hz-test.oss-cn-hangzhou.aliyuncs.com/web/941610529858_.pic.jpg">
				<ul class="bill_list">
					<li class="bill_detail" v-for="(v,i) in listFormat" :key="i">
						<div class="bill_top" v-if="v.totalIncomeAmount||v.totalExpendAmount" @click="v.show=!v.show">
							<div class="pad_t_24"><span class="icon"></span>{{v._sumDate | dateFormat(5)}}</div>
							<div class="bill_money">
								<div>
									<div class="money_name">收入</div>
									<div class="money_number">{{ (Number(v.totalIncomeAmount)/100).toFixed(2) }}</div>
								</div>
								<div>
									<div class="money_name">支出</div>
									<div class="money_number">{{ (Number(v.totalExpendAmount)/100).toFixed(2) }}</div>
								</div>
							</div>
						</div>
						<div v-if="(v.totalIncomeAmount||v.totalExpendAmount)&&v.show" class="bill_context back_fff">
							<img src="https://km-hz-test.oss-cn-hangzhou.aliyuncs.com/web/931610529857_.pic.jpg">
							<div class="detail_li">
								<div v-for="vv in v.list" :key="vv.id" @click="getFlowList(vv)">
									<div>
										<span class="li_name">{{vv.payRecordTypeDesc}}</span>
										<span class="li_call" v-if="vv.hasRefund">有退款</span>
										<span class="li_number" v-if="vv.payRecordType=='NORMAL_PAY'">+{{vv.payAmount|amount}}</span>
										<span class="li_number" v-if="vv.payRecordType=='REPAY_FEE'">+{{vv.payAmount|amount}}</span>
										<span class="li_number" v-if="vv.payRecordType=='REFUND'">-{{vv.shopShareAmt|amount}}</span>
										<span class="li_number" v-if="vv.payRecordType=='CANCEL_REPAY_FEE'">-{{vv.payAmount|amount}}</span>
									</div>
									<div style="height:14px;"></div>
									<div>
										<span class="li_time">{{vv._sumDate | dateFormat(2)}}</span>
										<span class="li_out" v-if="vv.payRecordType=='NORMAL_PAY'">(实到 ¥{{vv.shopShareAmt|amount}})</span>
										<span class="li_out" v-if="vv.payRecordType=='REPAY_FEE'"></span>
										<span class="li_out" v-if="vv.payRecordType=='REFUND'">(实退 ¥{{vv.actuallyRefundAmount|amount}})</span>
										<span class="li_out" v-if="vv.payRecordType=='CANCEL_REPAY_FEE'"></span>
									</div>
								</div>
							</div>
						</div>
						<div v-else class="clear50"></div>
					</li>
				</ul>
			</div>
		</betterScroll>


		<!-- <div class="today_warp">
            <div class="today_info">
                <div class="flex-align-center fb mb30">
                    <span class="f40 mr10">+{{todayData.totalPayment | amount}}</span>
                    <span>（实到¥{{todayData.totalShopShareAmount | amount}}）</span>
                </div>
                <div class="flex-align-center">
                    <span class="flex-1">今日实时数据</span>
                    <span @click="getFlowList('today')" class="f24">查看明细>></span>
                </div>
            </div>
        </div>
        <div class="time_warp br40 ml30 mr30 mt16">
            <div class="flex-1 flex-center" @click="showStartTime">
                <div v-if="options.timeRangeStart" >{{options.timeRangeStart | dateFormat(5)}}</div>
                <div v-else>开始时间</div>
                <i class="iconfont f20 ml10">&#xf047;</i>
            </div>
            <div class="flex-1 flex-center" @click="showEndTime">
                <div v-if="options.timeRangeEnd">{{options.timeRangeEnd | dateFormat(5)}}</div>
                <div v-else class="mr8">结束时间</div>
                <i class="iconfont f20 ml10">&#xf047;</i>
            </div>
        </div> -->
		<!-- <div class="pv25 mt30 mb30 ml60 mr60 flex">
                <div class="flex-1 f26">
                    <span class="c-69 fb mr20">累计收款</span>
                    <span class="fb c-3">￥{{listSumData.sumTotalPayment | amount}}</span>
                </div>
                <div class="flex-1 f26">
                    <span class="c-69 fb mr20">累计实际到账</span>
                    <span class="fb c-3">￥{{listSumData.sumTotalShopShare | amount}}</span>
                </div>
        </div> -->
		<!-- <div class="pv25 br18 back-white">
            <van-list
                v-if="list.length>0"
                v-model="loading"
                :finished="list.length === count"
                finished-text="没有更多了"
                @load="loadMore">
                <div class="item" v-for="(v,i) in list" :key="i">
                    <div class="flex-align-center fb mb30">
                        <span class="f40 mr10">+{{v.totalPayment | amount}}</span>
                        <span>（实到¥{{v.totalShopShareAmount | amount}}）</span>
                    </div>
                    <div class="flex-align-center">
                        <span class="flex-1">{{v.sumDate | dateFormat(5)}}</span>
                        <span @click="getFlowList(v.sumDate)" class="f24 c-red">查看明细>></span>
                    </div>
                </div>
            </van-list>
            <mk-default v-if="list.length === 0 && !loading" type="order" text="暂无记录"></mk-default>
        </div> -->
		<!-- 开始时间 -->
		<!-- <time-picker ref="startPicker" :minDate="new Date(2019,1,1)" :maxDate="options.timeRangeEnd?new Date(options.timeRangeEnd):new Date(new Date().getTime() - 24*60*60*1000)"  @confirm="getStartTime"></time-picker> -->
		<!-- 结束时间 -->
		<!-- <time-picker ref="endPicker" :minDate="options.timeRangeStart?new Date(options.timeRangeStart):new Date(2019,1,1)" :maxDate="new Date(new Date().getTime() - 24*60*60*1000)" @confirm="getEndTIme"></time-picker> -->
	</div>
</template>
<script>
	import moment from 'moment';
	import timePicker from 'components/timePicker'
	import { APIpayFlowSummary,APIpayFlowList } from 'api'
	import { getCookie, debounce } from "utils";
	import betterScroll from '../../../../components/betterScroll/index'

	export default {
		name:'activity_gift_payFlowRecord',
		components: { timePicker,betterScroll },
		data() {
			return {
				options:{
					pageNo:1,
					pageSize:20,
					timeRangeStart:'',
					timeRangeEnd:'',
				},
				sumamaryList:[],//统计流水 列表
				todayData:null,//今天的流水统计
				list:[],//流水详情列表
				listFormat:[],//已经格式化数据
				count:0, // 列表总数

				data:[]
			}
		},
		created() {
			this.getDayList()
		},
		methods:{
			//格式化时间
			dateFormat5:(time='',type=5,sign='-')=>{
				//时间处理
				if(!time) return ;
				let d = new Date(time),
						year = d.getFullYear(),
						month= d.getMonth()+1,
						date = d.getDate(),
						hour = d.getHours(),
						minute = d.getMinutes(),
						second = d.getSeconds(),
						result = '';
				switch (type){
					case 1:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date) + ' ' + (hour<10?('0'+hour):hour) + ':' + (minute<10?('0'+minute):minute);
						break;
					case 2:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date) + ' ' + (hour<10?('0'+hour):hour) + ':' + (minute<10?('0'+minute):minute) + ":" + (second<10?('0'+second):second);
						break;
					case 3:
						result = (month<10?('0'+month):month) + sign + (date<10?('0'+date):date);
						break;
					case 4:
						result = year + sign + (month<10?('0'+month):month);
						break;
					case 5:
						result = year + sign + (month<10?('0'+month):month) + sign + (date<10?('0'+date):date);
						break;
				}
				return result;
			},
			pulldown(){
				console.log('下拉')
				this.getDayList(true);
			},
			pullup(){
				console.log('上拉');
				//每天都有几千条数据
				this.options.pageNo++;
				this.getDayList();
			},
			//获取最近十天流水统计  总支出 总收入
			getSumamaryList(flag) {
				return new Promise((resolve, reject)=>{
					let options = {
						pageNo:flag?1:this.options.pageNo,
						pageSize:20,
					}
					APIpayFlowSummary(options).then(res => {
						if(res.resultCode === '0') {
							const data = res.resultData;
							let sumamaryList = flag?(data.pageData.page.list||[]):this.sumamaryList.concat(data.pageData.page.list);
							for(let ii of sumamaryList){
								let time = new Date(ii.sumDate);
								ii.sumDate = this.dateFormat5(ii.sumDate)
							}
							this.sumamaryList = sumamaryList;
							//这个接口不包含当天数据 单独处理下
							data.todayData.sumDate = this.dateFormat5(data.todayData.sumDate)
							this.todayData = data.todayData;
						}
						resolve()
					})
				})
			},
			//查询最近的20笔 记录 以此类推
			getDayList(flag){
				if(flag) this.options.pageNo = 1;
				this.$toast.loading({
					duration: 0,
					forbidClick: true,
					message: '加载中...'
				});
				APIpayFlowList(this.options).then(async res => {
					if(res.resultCode === '0') {
						this.$toast.clear();
						const data = res.resultData;
						this.count = data.totalSize
						//未格式化数据
						let list = flag?(data.list||[]):this.list.concat(data.list);
						this.list = list;

						//以支付时间为基准 分成每天
						list = list.map((item,index)=>{
							var time = new Date(item.payTime);
							item._sumDate = time;
							item.sumDate = this.dateFormat5(time)
							return item;
						})
						// outList =['2015-01-01']
						let outList = [];
						// outListData [{sumDate:2020-12-22,list:[]}]
						let outListData = [];
						//根据时间排序
						list.forEach((item,index)=>{
							if(outList.indexOf(item.sumDate)>=0){
								outListData[this.getIndex(outList,item.sumDate)].list.push(item);
							} else {
								outList.push(item.sumDate)
								outListData.push({sumDate:item.sumDate,_sumDate:item._sumDate,list:[item]})
							}
						})

						await this.getSumamaryList();
						//加上今天的流水统计
						let sumamaryList = this.sumamaryList;
						sumamaryList.unshift(this.todayData);
						for(let ii of outListData){
							for(let jj of sumamaryList){
								if(ii.sumDate==jj.sumDate){
									ii.totalIncomeAmount = jj.totalIncomeAmount;//收入
									ii.totalExpendAmount = jj.totalExpendAmount;//支出
									ii.show = true;
								}
							}
						}
						console.log(outListData)
						console.log(this.todayData)
						this.$nextTick(()=>{
							this.listFormat = outListData;
						})
					}
				})
			},
			getIndex(arr,obj){
				for(var i=0;i<arr.length;i++){
					if(arr[i]===obj){
						return i;
					}
				}
				return -1;
			},
			getFlowList(item) {
				this.$router.push('payFlowList?id='+item.id)
			},
		},
	}
</script>

<style src="assets/less/modules/activity/giftGiving/payFlowRecord.less" lang="less"></style>
