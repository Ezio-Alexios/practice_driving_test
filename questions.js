// 加州路考常用指令与口语题库
// California DMV Road Test — Common Examiner Phrases
// 每条: { en: 英文, zh: 中文翻译, note: 中文说明/什么时候会听到, cat: 分类 }

const QUESTIONS = [
  // ===== 开始 / Greeting & Start =====
  {
    cat: "开始",
    en: "Good morning. Do you have your license and registration?",
    zh: "早上好。你带了驾照和行驶证（注册证）吗？",
    note: "考试开始时，考官会先核对你的证件。回答 “Yes, here you go.”（在这，给你）。",
    reply: "Yes, here you go.",
  },
  {
    cat: "开始",
    en: "May I see your driver's license, please?",
    zh: "请出示你的驾照，可以吗？",
    note: "考官要看你的临时驾照/学习驾照。把证件递给他。",
    reply: "Sure, here it is.",
  },
  {
    cat: "开始",
    en: "Please sign here.",
    zh: "请在这里签名。",
    note: "考试前可能需要在评分表上签名。",
  },
  {
    cat: "开始",
    en: "Is this your vehicle?",
    zh: "这是你的车吗？",
    note: "确认考试用车。回答 Yes 或 No, it's my friend's car.（不，是我朋友的车）。",
    reply: "Yes, it is.",
  },
  {
    cat: "开始",
    en: "Are you ready to begin?",
    zh: "你准备好开始了吗？",
    note: "确认你是否准备好。回答 “Yes, I'm ready.”",
    reply: "Yes, I'm ready. Thank you.",
  },
  {
    cat: "开始",
    en: "This is not a test of your nerves, so just relax and drive normally.",
    zh: "这不是考验你的胆量，放轻松，正常开车就好。",
    note: "考官常说的安抚话，让你别紧张。",
  },

  // ===== 车辆检查 / Pre-drive Vehicle Check =====
  {
    cat: "车辆检查",
    en: "Before we start, please show me your hand signals.",
    zh: "开始之前，请给我做一下手势信号。",
    note: "可能要求你伸出窗外做转弯/停车的手势。左转：手臂平伸；右转：手臂向上弯；停车/减速：手臂向下。",
  },
  {
    cat: "车辆检查",
    en: "Show me the hand signal for a left turn.",
    zh: "做一下左转的手势。",
    note: "左臂水平伸直指向左边。",
  },
  {
    cat: "车辆检查",
    en: "Show me the hand signal for a right turn.",
    zh: "做一下右转的手势。",
    note: "左臂伸出窗外，小臂向上弯成 90 度。",
  },
  {
    cat: "车辆检查",
    en: "Show me the hand signal for slowing down or stopping.",
    zh: "做一下减速或停车的手势。",
    note: "左臂伸出窗外，小臂向下弯。",
  },
  {
    cat: "车辆检查",
    en: "Turn on your headlights.",
    zh: "打开你的大灯（前照灯）。",
    note: "找到大灯开关并打开。",
  },
  {
    cat: "车辆检查",
    en: "Turn on your left turn signal. / Turn on your right turn signal.",
    zh: "打开你的左转向灯。／打开你的右转向灯。",
    note: "拨动转向灯拨杆，左下右上。",
  },
  {
    cat: "车辆检查",
    en: "Turn on your windshield wipers.",
    zh: "打开你的雨刮器（挡风玻璃刮水器）。",
    note: "找到雨刮开关并打开。",
  },
  {
    cat: "车辆检查",
    en: "Turn on your hazard lights. / Turn on your emergency flashers.",
    zh: "打开你的双闪（危险警告灯）。",
    note: "通常是仪表台上红色三角形的按钮。",
  },
  {
    cat: "车辆检查",
    en: "Show me the defroster / rear defroster.",
    zh: "指给我看除雾器／后窗除雾。",
    note: "指出前/后挡风除雾的按钮。",
  },
  {
    cat: "车辆检查",
    en: "Honk the horn.",
    zh: "按一下喇叭。",
    note: "按方向盘中间的喇叭。",
  },
  {
    cat: "车辆检查",
    en: "Step on the brake. / Press the brake pedal.",
    zh: "踩一下刹车。",
    note: "考官在车后检查刹车灯是否亮。",
  },
  {
    cat: "车辆检查",
    en: "Where is the emergency brake / parking brake?",
    zh: "手刹（驻车制动）在哪里？",
    note: "指出手刹的位置（脚刹或拉杆或按钮）。",
  },
  {
    cat: "车辆检查",
    en: "Please put on your seat belt.",
    zh: "请系好你的安全带。",
    note: "上车后第一件事就是系安全带。",
  },

  // ===== 驾驶途中 / While Driving =====
  {
    cat: "行驶中",
    en: "Whenever you're ready, go ahead and pull out.",
    zh: "你准备好后，就开出去（驶离路边）吧。",
    note: "开始驾驶。先打左转向灯、看后视镜和盲区，再开出去。",
  },
  {
    cat: "行驶中",
    en: "Go straight ahead.",
    zh: "一直往前直行。",
    note: "保持直行，不用转弯。",
  },
  {
    cat: "行驶中",
    en: "Follow the road. / Just follow the flow of traffic.",
    zh: "顺着路开。／跟着车流走。",
    note: "没有特别指示时，沿当前道路正常行驶。",
  },
  {
    cat: "行驶中",
    en: "At the next corner, turn left. / Turn left at the next street.",
    zh: "在下一个路口左转。／在下一条街左转。",
    note: "提前打转向灯、减速、观察后再转。",
  },
  {
    cat: "行驶中",
    en: "Turn right at the next intersection.",
    zh: "在下一个十字路口右转。",
    note: "提前打右转向灯并靠右。",
  },
  {
    cat: "行驶中",
    en: "Turn right at the stop sign.",
    zh: "在停车标志处右转。",
    note: "先完全停下，再右转。",
  },
  {
    cat: "行驶中",
    en: "Get in the left lane. / Move into the left lane.",
    zh: "并到左车道。／换到左侧车道。",
    note: "打转向灯、看后视镜和盲区，安全后再变道。",
  },
  {
    cat: "行驶中",
    en: "Move over to the right lane.",
    zh: "换到右侧车道。",
    note: "打右转向灯，确认安全后变道。",
  },
  {
    cat: "行驶中",
    en: "Stay in this lane.",
    zh: "保持在这条车道。",
    note: "不要变道，继续直行。",
  },
  {
    cat: "行驶中",
    en: "Take the next right. / Make your next right.",
    zh: "下一个路口右转。",
    note: "“Take/Make a right” 就是右转的口语说法。",
  },
  {
    cat: "行驶中",
    en: "Take the second left. / Turn left at the second street.",
    zh: "第二个路口左转。／第二条街左转。",
    note: "注意是第二个，不是第一个。",
  },
  {
    cat: "行驶中",
    en: "Continue to the next light.",
    zh: "继续开到下一个红绿灯。",
    note: "保持直行直到下一个信号灯。",
  },
  {
    cat: "行驶中",
    en: "Speed up a little, please. / You can go a little faster.",
    zh: "请稍微加点速。／你可以开快一点。",
    note: "你开得太慢了，跟上限速。",
  },
  {
    cat: "行驶中",
    en: "Slow down, please.",
    zh: "请减速。",
    note: "适当踩刹车减速。",
  },
  {
    cat: "行驶中",
    en: "Watch your speed.",
    zh: "注意你的车速。",
    note: "提醒你可能超速或速度不稳，留意限速牌。",
  },
  {
    cat: "行驶中",
    en: "The speed limit here is twenty-five.",
    zh: "这里的限速是 25（英里/小时）。",
    note: "提醒你当前限速。",
  },
  {
    cat: "行驶中",
    en: "Get ready to merge onto the freeway.",
    zh: "准备并入高速公路。",
    note: "加速到车流速度，找空隙安全并入。",
  },
  {
    cat: "行驶中",
    en: "Merge with traffic.",
    zh: "并入车流。",
    note: "观察、加速、安全并道。",
  },

  // ===== 停车与特殊动作 / Stopping & Maneuvers =====
  {
    cat: "停车与动作",
    en: "Pull over to the right and stop when it's safe.",
    zh: "安全的时候，靠右停车。",
    note: "打右转向灯，靠路边平稳停下，挂 P/拉手刹。",
  },
  {
    cat: "停车与动作",
    en: "Pull over and park as if this were an emergency.",
    zh: "靠边停车，就当作这是紧急情况。",
    note: "靠边停下后通常要打双闪、拉手刹。",
  },
  {
    cat: "停车与动作",
    en: "Pull up to the curb and stop.",
    zh: "靠到路缘（路边）停下。",
    note: "尽量贴近路缘但不要压到。",
  },
  {
    cat: "停车与动作",
    en: "When you're ready, pull away from the curb.",
    zh: "准备好后，从路边开出去。",
    note: "打左转向灯、看盲区，安全后驶离。",
  },
  {
    cat: "停车与动作",
    en: "I'd like you to back up in a straight line.",
    zh: "我要你直线倒车。",
    note: "回头看后方，慢慢直线倒车约 3 个车身长。",
  },
  {
    cat: "停车与动作",
    en: "Back up about three car lengths.",
    zh: "倒车大约三个车身的距离。",
    note: "倒车时身体转向后方观察，不只看后视镜。",
  },
  {
    cat: "停车与动作",
    en: "Make a U-turn when it's safe and legal.",
    zh: "在安全且合法的地方掉头（U 形转弯）。",
    note: "确认没有禁止掉头标志，观察来车后掉头。",
  },
  {
    cat: "停车与动作",
    en: "Make a three-point turn to turn the car around.",
    zh: "做一个三点掉头，把车头掉过来。",
    note: "前进打满方向、倒车、再前进，分三步掉头。",
  },
  {
    cat: "停车与动作",
    en: "Park between the two cones. / Pull into the parking space.",
    zh: "停在两个锥桶之间。／把车停进车位。",
    note: "对准车位，慢慢驶入并摆正。",
  },

  // ===== 路口与让行 / Intersections =====
  {
    cat: "路口让行",
    en: "Come to a complete stop at the stop sign.",
    zh: "在停车标志处完全停下。",
    note: "一定要停稳（车轮完全静止），不能滑行（rolling stop）。",
  },
  {
    cat: "路口让行",
    en: "Yield to the pedestrians.",
    zh: "给行人让行。",
    note: "行人有优先权，停车等他们走过。",
  },
  {
    cat: "路口让行",
    en: "Yield to oncoming traffic.",
    zh: "给对向来车让行。",
    note: "左转时等对面直行车通过。",
  },
  {
    cat: "路口让行",
    en: "Go when it's safe. / Proceed when clear.",
    zh: "安全的时候再走。／没车的时候通过。",
    note: "确认安全后再起步通过路口。",
  },

  // ===== 结束 / End of Test =====
  {
    cat: "结束",
    en: "Let's head back to the DMV.",
    zh: "我们开回 DMV（车管所）吧。",
    note: "考试快结束，按指示开回出发点。",
  },
  {
    cat: "结束",
    en: "Pull into this parking spot and put it in park.",
    zh: "停进这个车位，挂到 P 挡。",
    note: "停好、挂 P、拉手刹、关掉转向灯。",
  },
  {
    cat: "结束",
    en: "Go ahead and turn off the engine.",
    zh: "把发动机熄火吧。",
    note: "关闭引擎，考试结束。",
  },
  {
    cat: "结束",
    en: "You passed. Congratulations!",
    zh: "你通过了。恭喜！",
    note: "最想听到的一句话！",
  },
  {
    cat: "结束",
    en: "Unfortunately, you did not pass today. Let's go over the results.",
    zh: "很遗憾，你今天没通过。我们来看一下结果。",
    note: "没过时考官会和你讲解扣分点，下次再来。",
  },
];

if (typeof module !== "undefined") {
  module.exports = QUESTIONS;
}
