// 获取DOM元素
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');

// 计时器变量
let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// 格式化时间显示，确保两位数显示
function formatTime(time, digits = 2) {
    return time.toString().padStart(digits, '0');
}

// 更新计时器显示
function updateDisplay() {
    // 计算小时、分钟、秒和毫秒
    const totalMilliseconds = elapsedTime;
    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);
    
    // 更新显示
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
    millisecondsElement.textContent = formatTime(milliseconds);
}

// 开始计时
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        
        // 记录开始时间，考虑已经过去的时间
        startTime = Date.now() - elapsedTime;
        
        // 设置定时器，每10毫秒更新一次显示
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        
        // 更新按钮状态
        startButton.disabled = true;
        pauseButton.disabled = false;
    }
}

// 暂停计时
function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        
        // 清除定时器
        clearInterval(timerInterval);
        
        // 更新按钮状态
        startButton.disabled = false;
        startButton.textContent = '继续';
        pauseButton.disabled = true;
    }
}

// 重置计时器
function resetTimer() {
    // 清除定时器
    clearInterval(timerInterval);
    
    // 重置状态和时间
    isRunning = false;
    elapsedTime = 0;
    
    // 更新显示
    updateDisplay();
    
    // 重置按钮状态
    startButton.disabled = false;
    startButton.textContent = '开始';
    pauseButton.disabled = true;
}

// 添加事件监听器
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// 初始化显示
updateDisplay(); 