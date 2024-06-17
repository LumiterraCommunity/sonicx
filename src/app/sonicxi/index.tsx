import { Img, Button, Text } from "../../components";
import React from "react";

export default function SonicxiPage() {
  return (
    <>
      {/* main layout section */}
      <div className="h-[1080px] w-full bg-gray-600_05 bg-[url(/images/img_sonicxi.png)] bg-cover bg-no-repeat py-2.5 md:h-auto">
        {/* header section */}
        <div className="relative mb-[86px] h-[974px] md:h-auto">
          {/* logo and navigation section */}
          <div className="flex w-full flex-col">
            {/* logo section */}
            <Img
              src="img_header_logo.png"
              width={154}
              height={103}
              alt="header logo"
              className="relative z-[1] ml-[15px] h-[103px] w-[154px] object-contain md:ml-0"
            />

            {/* navigation section */}
            <div className="relative mt-[-30px] flex flex-col items-center">
              {/* hero image section */}
              <div className="flex justify-center self-stretch">
                {/* featured image section */}
                <Img
                  src="img_frame_22_1.png"
                  width={1056}
                  height={243}
                  alt="image frame"
                  className="h-[243px] w-[1060px] object-cover"
                />
              </div>

              {/* steps section */}
              <div className="mx-auto mt-[13px] flex w-full max-w-[1412px] md:p-5">
                {/* step one section */}
                <div className="flex w-full md:flex-col">
                  {/* step two section */}
                  <div className="flex w-full md:flex-col">
                    {/* step three section */}
                    <div className="h-[130px] w-[358px] md:w-full">
                      {/* step four section */}
                      <div className="h-[130px] w-[357px] rounded-[10px] bg-[url(/images/img_group_9572914.svg)] bg-cover bg-no-repeat p-[7px] md:h-auto">
                        {/* step five section */}
                        <div className="flex h-[116px] items-center justify-center rounded bg-[url(/images/img_group_192.svg)] bg-cover bg-no-repeat p-[31px] md:h-auto sm:p-5">
                          {/* step six section */}
                          <div className="flex w-[75%] items-center justify-center gap-[7px] md:w-full">
                            {/* step seven section */}
                            <Text as="p" className="!font-jollylodger">
                              <span className="font-swisblkcnbt text-deep_orange-500_01">01</span>
                              <span className="font-swisblkcnbt text-lime-900_31">.Follow&nbsp;</span>
                              <span className="font-swisblkcnbt text-lime-900_31">Twitter</span>
                              <span className="font-swisblkcnbt text-lime-900_31">&nbsp;</span>
                            </Text>

                            {/* step eight section */}
                            <Img
                              src="img_frame_lime_900_12.svg"
                              width={54}
                              height={54}
                              alt="profile image"
                              className="h-[54px] w-[54px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* step nine section */}
                    <div className="relative ml-[-8px] w-[357px] md:ml-0 md:w-full">
                      {/* step ten section */}
                      <div className="h-[130px] w-[357px] rounded-[10px] bg-[url(/images/img_group_9572914.svg)] bg-cover bg-no-repeat p-[7px] md:h-auto">
                        {/* step eleven section */}
                        <div className="flex h-[116px] items-center justify-center rounded bg-[url(/images/img_group_192.svg)] bg-cover bg-no-repeat p-[23px] md:h-auto sm:p-5">
                          {/* step twelve section */}
                          <div className="flex w-[68%] flex-col gap-[3px] md:w-full">
                            {/* download instructions section */}
                            <Text as="p" className="text-center leading-[22px]">
                              02.Download and Enter Access Code
                            </Text>

                            {/* access code section */}
                            <Text size="xs" as="p" className="!text-red-600">
                              Access Code:“SonicLumi”
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* earn rewards section */}
                  <div className="relative ml-[-8px] flex w-full items-center md:ml-0 md:flex-col">
                    {/* earn step one section */}
                    <div className="w-full">
                      {/* earn step two section */}
                      <div className="h-[130px] w-[357px] rounded-[10px] bg-[url(/images/img_group_9572914.svg)] bg-cover bg-no-repeat p-[7px] md:h-auto">
                        {/* earn step three section */}
                        <div className="flex h-[116px] items-center justify-center rounded bg-[url(/images/img_group_192.svg)] bg-cover bg-no-repeat p-[43px] md:h-auto md:p-5">
                          {/* earn instructions section */}
                          <Text as="p" className="self-end">
                            03.Earn Sonic Ring in Game
                          </Text>
                        </div>
                      </div>
                    </div>

                    {/* call to action section */}
                    <div className="relative ml-[-8px] h-[130px] w-[357px] min-w-[357px] self-end rounded-[10px] bg-[url(/images/img_group_198.svg)] bg-cover bg-no-repeat p-[7px] md:ml-0 md:h-auto md:w-full">
                      {/* cta step one section */}
                      <div className="flex h-[116px] items-center justify-center rounded bg-[url(/images/img_group_192.svg)] bg-cover bg-no-repeat p-2.5 md:h-auto">
                        {/* cta step two section */}
                        <div className="flex w-[83%] items-center justify-center gap-[5px] md:w-full">
                          {/* cta text section */}
                          <Text size="md" as="p" className="tracking-[-2.00px] !text-red-600">
                            TODAMOON
                          </Text>

                          {/* cta image section */}
                          <Img
                            src="img_39_2.png"
                            width={78}
                            height={96}
                            alt="moon image"
                            className="h-[96px] w-[30%] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* buttons row section */}
              <div className="mt-[423px] flex justify-center gap-6 self-stretch p-[9px] md:flex-col">
                {/* win button section */}
                <Button
                  shape="round"
                  leftIcon={
                    <Img src="img_frame.svg" width={27} height={27} alt="frame" className="h-[27px] w-[27px]" />
                  }
                  className="gap-[3px]"
                >
                  Win{" "}
                </Button>

                {/* mac button section */}
                <Button
                  shape="round"
                  leftIcon={
                    <Img
                      src="img_user_orange_100_15.svg"
                      width={21}
                      height={25}
                      alt="user"
                      className="h-[25px] w-[21px]"
                    />
                  }
                  className="gap-0.5"
                >
                  Mac
                </Button>

                {/* android button section */}
                <Button
                  shape="round"
                  leftIcon={
                    <Img src="img_thumbsup.svg" width={23} height={24} alt="thumbs_up" className="h-[24px] w-[23px]" />
                  }
                  className="gap-[3px]"
                >
                  Android
                </Button>
              </div>
            </div>
          </div>

          {/* footer image section */}
          <Img
            src="img_frame_36.svg"
            width={205}
            height={63}
            alt="image frame"
            className="absolute right-[14.00px] top-[10.00px] m-auto h-[63px] w-[11%]"
          />
        </div>
      </div>
    </>
  );
}
