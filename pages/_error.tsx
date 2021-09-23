import { NextPageContext } from 'next';
import Image from 'next/image';

function Error({ statusCode }: { statusCode: number }) {
  return (
    <>
      <h1>
        {statusCode
          ? `어?! ${statusCode} 에러가 발생했습니다. 이러면 안되는데...`
          : '페이지 이용상의 에러가 발생했습니다.'}
      </h1>
      <Image
        src="/images/6ebb2cf8ed8a3f6cdebe2f6aedc640e6.jpeg"
        width={500}
        height={500}
      />
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
