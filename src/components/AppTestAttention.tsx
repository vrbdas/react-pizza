import IconAttention from '@/icons/IconAttention';

export default function AppTestAttention() {
  return (
    <>
      <div className="test-attention">
        <h3>
          <IconAttention />
          Внимание!
        </h3>
        <p>
          В тестовой версии сайта авторизация возможна только по следующим номерам телефонов: <strong>+7 999 111-11-11</strong>, <strong>+7 999 222-22-22</strong>, <strong>+7 999 333-33-33</strong>.
        </p>
        <p>
          Код подтверждения для всех номеров: <strong>123456</strong>
        </p>
      </div>
    </>
  );
}
