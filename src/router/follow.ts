import { line } from 'bottender/router';

export default line.follow(async (context) => {
  await context.replyText(`ばりぐっどくんとお友達になってくれてありがとう😃
ぼくは長崎県西海市に住んどるよ😆
文字の含まれとる画像ば送ってくれたら文章にして返すけんね😃`);
});
