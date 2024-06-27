const eye = document.querySelector('.eye-button');
const pupil = document.querySelector('.pupil');
const video = document.getElementById('video');
// 获取根元素 (通常是<html>)
const root = document.documentElement;

async function startFacialRecognition() {
    console.log('Starting facial recognition...');

    

    // 添加点击动画类
    eye.classList.add('clicked');

    // 等待点击动画结束
    eye.addEventListener('animationend', async () => {
        eye.classList.remove('clicked'); // 移除点击动画类

        // 触发后续逻辑
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            

            pupil.style.animation = 'none'; // 重置之前的动画
            setTimeout(() => {
            // 触发瞪眼动画，持续1秒
            root.style.setProperty('--eyeScaleX', '1.2'); // 将eyeScaleX设置为1.2
            root.style.setProperty('--eyeScaleY', '1.5'); // 将eyeScaleY设置为1.5
            pupil.style.animation = 'enlargePupil 1s forwards';
            console.log('瞪眼动画开始');

            // 监听动画结束事件
            pupil.addEventListener('animationend', () => {
                // 动画完成后执行的代码
                console.log('瞪眼动画结束');
                // 缩小眼睛并上移
                eye.style.transform = 'translate(-50%, -170%) scale(0.5)'; // 调整位置和缩放

                // 显示视频流
                video.style.display = 'block';
                video.style.opacity = '1';

                /* 人脸识别 */
                // 人脸识别接口需先确定是否检测到人脸，若检测到则返回true，否则返回false
                // 后需要确定数据库中是否存在用户，若存在则返回用户id，否则返回null

                // 此处为检测到人脸，但数据库中不存在用户的情况
                // 等待两秒
                setTimeout(() => {
                    // 眼睛放大至白色瞳孔区域覆盖整个屏幕，随后跳转至注册界面
                    // 移除监听器
                    pupil.removeEventListener('animationend', startBlinking);
                    eye.style.transform = 'translate(-50%, -50%) scale(25)'; // 调整位置和缩放
                    setTimeout(() => {
                        window.location.href = '../register.html'; // 跳转至注册界面
                    }, 1000); // 1秒后跳转
                }, 2000); 
                

                /* 人脸识别 */
                setTimeout(() => {
                    // 如果几秒后没有检测到人脸
                    resetInterface();
                }, 8000); // 8秒后无人脸检测则重置界面
            }, { once: true }); // 确保事件监听器只触发一次
            })

            } 
            catch (error) {
            console.error('Error accessing the camera: ', error);
            resetInterface();
        }
    }, {once: true});
}

function resetInterface() {
    const eye = document.querySelector('.eye-button');
    const pupil = document.querySelector('.pupil');
    const video = document.getElementById('video');
    const root = document.documentElement;


    // 恢复眼睛位置和大小
    root.style.setProperty('--eyeScaleX', '1'); // 将eyeScaleX设置为1
    root.style.setProperty('--eyeScaleY', '1'); // 将eyeScaleY设置为1
    eye.style.transform = 'translate(-50%, -50%) scale(1)';
    eye.style.top = '50%';
    video.style.opacity = '0';

    // 关闭摄像头
    if (video.srcObject) {
        const tracks = video.srcObject.getTracks();
        tracks.forEach(track => track.stop());
    }

    video.srcObject = null; // 清除视频源

    // 渐出动画后恢复瞳孔原始状态
    setTimeout(() => {
        video.style.display = 'none';
        pupil.style.transform = 'scale(var(--eyeScaleX))'; // 恢复瞳孔原始状态
    }, 1000); // 渐出动画后隐藏视频
}



function startBlinking() {
    // 生成一个2到5秒的随机延迟
    const delay = Math.random() * (5000 - 2000) + 2000;
    // 生成一个1到5的随机眨眼次数
    const blinkTimes = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    pupil.style.animation = 'none'; // 先重置动画以避免立即开始
    setTimeout(() => {
        // 重新应用动画并设置新的延迟和随机眨眼次数
        pupil.style.animation = `blinkIdle 0.5s steps(2, start) ${blinkTimes}`;
    }, delay);
}
function handleAnimationEnd() {
    pupil.removeEventListener('animationend', handleAnimationEnd);
}
//随机眨眼
document.addEventListener('DOMContentLoaded', function() {
    const pupil = document.querySelector('.pupil');


    // 监听动画结束事件（眨眼动画）
    pupil.addEventListener('animationend', startBlinking);

    // 开始第一次动画
    startBlinking();
});
