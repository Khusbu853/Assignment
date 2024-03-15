import React from "react";
import { Helmet } from "react-helmet";
import { Img, Descriptionstyle, TextHeading, Button } from "components";
import OptionOneHeroanimation from "components/OptionOneHeroanimation";
import OptionOneImage from "components/OptionOneImage";
import OptionOneImg from "components/OptionOneImg";

export default function OptionOnePage() {
  return (
    <>
      <Helmet>
        <title>Flaer Home page</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <>
      <div className="w-[1400px] overflow-y-auto overflow-x-auto">
        <div className="flex flex-col items-center">
          <header className="w-[100%] p-4 bg-white-A700_01 shadow-sm fixed top-0 z-50 ">
            <div className="w-full mx-auto max-w-7xl">
              <div className="flex justify-between items-center gap-5">
                <Img
                  src="images/img_flaer_homes_main.svg"
                  alt="flaerhomes_one"
                  className="h-[21px]"
                />
                <ul className="flex justify-center pt-px gap-[88px]">
                  <li>
                    <a href="#">
                      <Descriptionstyle as="p" className="!text-blue_gray-900 capitalize">
                        About us
                      </Descriptionstyle>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Descriptionstyle as="p" className="!text-blue_gray-900 capitalize">
                        Products
                      </Descriptionstyle>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Descriptionstyle as="p" className="!text-blue_gray-900 capitalize">
                        Resources
                      </Descriptionstyle>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Descriptionstyle as="p" className="!text-blue_gray-900 capitalize">
                        Contact Us
                      </Descriptionstyle>
                    </a>
                  </li>
                </ul>
                <Button
                  color="blue_gray_900"
                  size="sm"
                  shape="square"
                  className=" font-medium min-w-[168px]"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </header>
        </div>
        <div>
          <div>
            <div className="w-full mx-auto max-w-[1440px]">
              <OptionOneHeroanimation className="h-[734px] bg-white-A700_01 relative" />
              <div className="h-[3693px] relative ">
                <div className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute ">
                  <div className="flex flex-col items-end">
                    <div className="flex flex-col self-stretch justify-center pl-20 pr-14 py-20 z-[1] bg-gradient2">
                      <Descriptionstyle
                        size="3xl"
                        as="p"
                        className="mt-[3px] !text-gray-900 !font-outfit"
                      >
                        What makes us different
                      </Descriptionstyle>
                      <div className="h-[3px] w-[7%] mt-1.5 bg-red-A700" />
                      <div className="flex mt-[53px] gap-6">
                        <div className="flex flex-col w-full gap-[13px] p-8 bg-white-A700_01">
                          <Button shape="square" className="w-[48px]">
                            <Img src="images/img_badge.svg" />
                          </Button>
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-900 !font-outfit !font-medium"
                          >
                            Unmatched Quality
                          </Descriptionstyle>
                          <Descriptionstyle
                            as="p"
                            className="!text-blue_gray-700 !font-normal leading-[150%]"
                          >
                            Elevating interiors with superior materials and
                            craftsmanship.
                          </Descriptionstyle>
                        </div>
                        <div className="flex flex-col w-full gap-[13px] p-8 bg-white-A700_01">
                          <Button shape="square" className="w-[48px]">
                            <Img src="images/img_brush_freehand.svg" />
                          </Button>
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-900 !font-outfit !font-medium"
                          >
                            Innovative Design
                          </Descriptionstyle>
                          <Descriptionstyle
                            as="p"
                            className="!text-blue_gray-700 !font-normal leading-[150%]"
                          >
                            Redefining spaces with cutting-edge solutions and
                            creativity.
                          </Descriptionstyle>
                        </div>
                        <div className="flex flex-col w-full gap-[13px] p-8 bg-white-A700_01">
                          <Button shape="square" className="w-[48px]">
                            <Img src="images/img_sprout.svg" />
                          </Button>
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-900 !font-outfit !font-medium"
                          >
                            Sustainable Practices
                          </Descriptionstyle>
                          <Descriptionstyle
                            as="p"
                            className="!text-blue_gray-700 !font-normal leading-[150%]"
                          >
                            Committed to eco-friendly production methods and
                            materials.
                          </Descriptionstyle>
                        </div>
                        <div className="flex flex-col w-full gap-[13px] p-8 bg-white-A700_01">
                          <Img
                            src="images/img_interface_help.svg"
                            alt="interfacehelp"
                            className="h-[48px] w-[48px]"
                          />
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-900 !font-outfit !font-medium"
                          >
                            Service Excellence
                          </Descriptionstyle>
                          <Descriptionstyle
                            as="p"
                            className="!text-blue_gray-700 !font-normal leading-[150%]"
                          >
                            Providing personalized, attentive service to exceed
                            your expectations.
                          </Descriptionstyle>
                        </div>
                      </div>
                    </div>
                    <OptionOneImg className="h-[863px] w-[40%] mt-[-131px] relative" />
                  </div>
                  <div className="flex flex-col items-center justify-end mt-[-255px] px-14 py-[63px] z-[1] bg-gray-50_02">
                    <div className="flex flex-col w-[98%] mt-14 mb-[49px] gap-[90px]">
                      <div className="flex justify-center">
                        <div className="flex justify-center w-[40%]">
                          <Descriptionstyle
                            size="3xl"
                            as="p"
                            className="!text-blue_gray-900 !font-outfit capitalize"
                          >
                            How Flaer homes work
                          </Descriptionstyle>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex flex-col items-center gap-[113px] flex-1">
                          <div className="flex self-stretch justify-between items-start gap-5">
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_one"
                              className="h-[414px]"
                            />
                            <div className="flex flex-col w-[84%] mt-[121px] pt-1 gap-[13px]">
                              <Descriptionstyle
                                size="xl"
                                as="p"
                                className="!text-gray-900_02 tracking-[-0.32px] !font-outfit text-left"
                              >
                                Planning and Design
                              </Descriptionstyle>
                              <Descriptionstyle
                                size="s"
                                as="p"
                                className="!text-gray-700 tracking-[-0.20px] !leading-[134.02%]"
                              >
                                This stage involves envisioning the desired
                                layout, functionality, and aesthetics of the
                                interior space
                              </Descriptionstyle>
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle_34625263.png"
                            alt="image_one"
                            className="w-[87%] object-cover"
                          />
                          <div className="flex self-stretch justify-between items-center gap-5">
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_three"
                              className="h-[414px]"
                            />
                            <div className="flex flex-col w-[84%] pt-1 gap-[13px]">
                              <Descriptionstyle
                                size="xl"
                                as="p"
                                className="!text-gray-900_02 tracking-[-0.32px] !font-outfit text-left"
                              >
                                Hiring HIP
                              </Descriptionstyle>
                              <Descriptionstyle
                                size="s"
                                as="p"
                                className="!text-gray-700 tracking-[-0.20px] !leading-[134.02%]"
                              >
                                With the budget in place, homeowner can hire HIP
                                and eliminate the hassle of coordinating with
                                different individuals i.e. carpenters, painters,
                                electricians, plumbers, and other specialists
                                needed for the project.
                              </Descriptionstyle>
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle_34625265.png"
                            alt="image_two"
                            className="w-[87%] object-cover"
                          />
                          <div className="flex self-stretch justify-between items-center gap-5">
                            <Img
                              src="images/img_vector.svg"
                              alt="vector_five"
                              className="h-[414px]"
                            />
                            <div className="flex flex-col w-[85%] pt-1 gap-[13px]">
                              <Descriptionstyle
                                size="xl"
                                as="p"
                                className="!text-gray-900_02 tracking-[-0.32px] !font-outfit"
                              >
                                Finishing Touches and Furnishing:
                              </Descriptionstyle>
                              <Descriptionstyle
                                size="s"
                                as="p"
                                className="!text-gray-700 tracking-[-0.20px] !leading-[134.02%]"
                              >
                                Once the construction work is finished,
                                homeowners focus on adding finishing touches and
                                furnishing the interior space.
                              </Descriptionstyle>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col self-start items-center w-[6%] ml-[57px]">
                          <Descriptionstyle
                            size="2xl"
                            as="p"
                            className="flex justify-center items-center h-[54px] px-6 py-px !text-red-A100 tracking-[-0.40px] !font-outfit border-deep_orange-50 border border-solid bg-white-A700_01 text-shadow-ts rounded-lg"
                          >
                            1
                          </Descriptionstyle>
                          <div className="h-[414px] w-[2px] bg-indigo-100" />
                          <Descriptionstyle
                            size="2xl"
                            as="p"
                            className="flex justify-center items-center h-[54px] px-5 py-px !text-red-A100 tracking-[-0.40px] !font-outfit border-deep_orange-50 border border-solid bg-white-A700_01 text-shadow-ts rounded-lg"
                          >
                            2
                          </Descriptionstyle>
                          <div className="h-[414px] w-[2px] bg-indigo-100" />
                          <Descriptionstyle
                            size="2xl"
                            as="p"
                            className="flex justify-center items-center h-[54px] px-5 py-px !text-red-A100 tracking-[-0.40px] !font-outfit border-deep_orange-50 border border-solid bg-white-A700_01 text-shadow-ts rounded-lg"
                          >
                            3
                          </Descriptionstyle>
                          <div className="h-[435px] w-[2px] bg-indigo-100" />
                          <Descriptionstyle
                            size="2xl"
                            as="p"
                            className="flex justify-center items-center h-[54px] px-[19px] py-px !text-red-A100 tracking-[-0.40px] !font-outfit border-deep_orange-50 border border-solid bg-white-A700_01 text-shadow-ts rounded-lg"
                          >
                            4
                          </Descriptionstyle>
                          <div className="h-[435px] w-[2px] bg-indigo-100" />
                          <Descriptionstyle
                            size="2xl"
                            as="p"
                            className="flex justify-center items-center h-[54px] px-5 py-px !text-red-A100 tracking-[-0.40px] !font-outfit border-deep_orange-50 border border-solid bg-white-A700_01 text-shadow-ts rounded-lg"
                          >
                            5
                          </Descriptionstyle>
                        </div>
                        <div className="flex flex-col ml-[83px] flex-1">
                          <Img
                            src="images/img_rectangle_34625261.png"
                            alt="image_three"
                            className="w-[89%] object-cover"
                          />
                          <div className="flex justify-between items-center mt-[94px] ml-3.5 gap-5">
                            <div className="flex flex-col w-[89%] pt-1 gap-[13px]">
                              <Descriptionstyle
                                size="xl"
                                as="p"
                                className="!text-gray-900_02 tracking-[-0.32px] !font-outfit text-left"
                              >
                                Budgeting and Financing{" "}
                              </Descriptionstyle>
                              <Descriptionstyle
                                size="s"
                                as="p"
                                className="!text-gray-700 tracking-[-0.20px] !leading-[134.02%]"
                              >
                                Once the design is finalized, homeowners need to
                                establish a budget for the interior work.
                              </Descriptionstyle>
                            </div>
                            <Img
                              src="images/img_vector_indigo_200.svg"
                              alt="vector_seven"
                              className="h-[414px]"
                            />
                          </div>
                          <Img
                            src="images/img_rectangle_34625264.png"
                            alt="image_four"
                            className="w-[89%] mt-[116px] object-cover"
                          />
                          <div className="flex justify-between items-start mt-[134px] gap-5">
                            <div className="flex flex-col w-[86%] mt-[136px] gap-4">
                              <Descriptionstyle
                                size="xl"
                                as="p"
                                className="!text-gray-900_02 tracking-[-0.32px] !font-outfit text-left"
                              >
                                Construction and Installation
                              </Descriptionstyle>
                              <Descriptionstyle
                                size="s"
                                as="p"
                                className="!text-gray-700 tracking-[-0.20px] !leading-[134.02%]"
                              >
                                This stage involves the physical implementation
                                of the interior design plan.
                              </Descriptionstyle>
                            </div>
                            <Img
                              src="images/img_vector_indigo_200.svg"
                              alt="vector_nine"
                              className="h-[414px]"
                            />
                          </div>
                          <Img
                            src="images/img_rectangle_34625266.png"
                            alt="image_five"
                            className="w-[89%] mt-[118px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[487px] w-full right-0 top-[13%] m-auto absolute">
                  <div className="h-[477px] w-[93%] bottom-0 left-0 m-auto absolute" />
                  <div className="flex  w-full h-full pl-[66px] pr-14 left-0 bottom-0 right-0 top-0 py-[66px] m-auto absolute">
                    <div className="flex w-[53%] mt-[38px] ml-3.5">
                      <div className="flex flex-col items-start w-full gap-[18px]">
                        <div className="flex w-[67%] pt-1">
                          <Descriptionstyle
                            size="3xl"
                            as="p"
                            className="self-end !text-gray-900 !font-outfit capitalize"
                          >
                            Why choose Flaer Homes
                          </Descriptionstyle>
                        </div>
                        <div className="h-[3px] w-[12%] bg-red-A700" />
                        <Descriptionstyle
                          size="s"
                          as="p"
                          className="w-[98%] !text-blue_gray-700 !leading-8"
                        >
                          Flaer Homes is your trusted partner in home interior
                          design, offering innovative products, expert guidance,
                          and personalized services. We simplify the design
                          process, empowering homeowners to create spaces that
                          reflect their unique style and preferences. With Flaer
                          Homes, you&#39;ll find support and inspiration every
                          step of the way, making your design journey a seamless
                          and rewarding experience.
                        </Descriptionstyle>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="h-[757px] w-[100%] relative">
                    <div className="h-[757px] w-[100%] left-0 bottom-0 top-0 my-auto bg-red-100 absolute" />
                    <div className="flex justify-center items-start w-[70%] h-max gap-[22px] right-0 bottom-0 top-0 my-auto absolute">
                      <div className="w-[35%] object-cover">
                        <OptionOneImage />
                      </div>
                      <Img
                        src="images/img_rectangle_25.png"
                        alt="image_six"
                        className="w-[32%] object-cover"
                      />
                    </div>
                    <div className="flex flex-col w-[27%] h-full ml-[90px] gap-[60px] left-[5%] bottom-0 top-0 my-auto absolute">
                      <div className="flex flex-col">
                        <Descriptionstyle
                          size="3xl"
                          as="p"
                          className="!text-blue_gray-900 !font-outfit capitalize !leading-[134%]"
                        >
                          <>
                            Build with our
                            <br />
                            Top Contractors
                          </>
                        </Descriptionstyle>
                        <div className="h-[3px] w-[20%] mt-[17px] bg-red-A700" />
                        <Descriptionstyle
                          size="s"
                          as="p"
                          className="mt-[39px] !text-gray-700 !leading-8"
                        >
                          Flaer Homes simplifies the process of finding top-tier
                          contractors by connecting you with the top 7% in the
                          industry. We handpick contractors from our exclusive
                          network, guaranteeing
                        </Descriptionstyle>
                      </div>
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-2">
                          <Img
                            src="images/img_6272c8ff71728dd.svg"
                            alt="6272c8ff71728dd"
                            className="h-[32px] w-[32px]"
                          />
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="self-end !text-gray-700 tracking-[-0.20px]"
                          >
                            Unrivaled build quality
                          </Descriptionstyle>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img
                            src="images/img_6272c8ff71728dd.svg"
                            alt="6272c8ff71728dd"
                            className="h-[32px] w-[32px]"
                          />
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-700 tracking-[-0.20px]"
                          >
                            Stellar customer testimonials
                          </Descriptionstyle>
                        </div>
                        <div className="flex items-center gap-2">
                          <Img
                            src="images/img_6272c8ff71728dd.svg"
                            alt="6272c8ff71728dd"
                            className="h-[32px] w-[32px]"
                          />
                          <Descriptionstyle
                            size="s"
                            as="p"
                            className="!text-gray-700 tracking-[-0.20px]"
                          >
                            Valid licenses and full insurance Check
                          </Descriptionstyle>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700_01">
                <div className="flex justify-between items-center pr-[138px] gap-5 bg-red-A700">
                  <div className="h-[371px] w-[53%] relative">
                    <Img
                      src="images/img_group_139842.png"
                      alt="image_seven"
                      className="justify-center h-[371px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                    />
                    <Descriptionstyle
                      size="4xl"
                      as="p"
                      className="w-[74%] left-[12%] top-1/4 m-auto !text-white-A700_01 tracking-[-1.00px] !font-hilmar capitalize absolute"
                    >
                      Elevate your Interiors Today!
                    </Descriptionstyle>
                  </div>
                  <div className="flex flex-col items-start w-[40%] gap-8">
                    <Descriptionstyle
                      size="s"
                      as="p"
                      className="!text-white-A700_01 !leading-10"
                    >
                      Elevate your space with Flaer Homes&#39; premium raw
                      materials—transform your vision into reality today!&quot;
                    </Descriptionstyle>
                    <Button
                      color="blue_gray_900"
                      size="sm"
                      shape="square"
                      className="font-medium min-w-[168px]"
                    >
                      Schedule a Call
                    </Button>
                  </div>
                </div>
              </div>
              <footer className="flex justify-center items-center pb-[69px] bg-white-A700_01">
                <div className="flex flex-col items-center justify-center w-[89%] gap-[111px]">
                  <div className="h-px w-[71%] bg-gray-300" />
                  <div className="flex flex-col self-stretch gap-[71px]">
                    <div className="flex flex-col gap-[72px]">
                      <div className="flex justify-between items-center gap-5">
                        <div className="flex flex-col items-start justify-center gap-[30px]">
                          <TextHeading as="h5" className="mt-0.5">
                            CUSTOMER SERVICE
                          </TextHeading>
                          <ul className="flex flex-col items-start gap-[27px]">
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Help & FAQs</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Return & Refund</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Shipping Policy</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Customs and Taxes</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Customers’s Reviews</Descriptionstyle>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col items-start pt-0.5 gap-[29px]">
                          <TextHeading as="h5">COMPANY</TextHeading>
                          <ul className="flex flex-col items-start gap-7">
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">About Flaer Homes</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Contact Us</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Special Deals & Offers</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Terms of Service</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Privacy Policy</Descriptionstyle>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col self-start items-start pt-0.5 gap-[29px]">
                          <TextHeading as="h5">HELP CENTER</TextHeading>
                          <ul className="flex flex-col items-start gap-7">
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Order Information</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Shipping Options</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">International Shipping</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Payment Options</Descriptionstyle>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex flex-col items-start pt-0.5 gap-[30px]">
                          <TextHeading as="h5">RETURN & WARRANTLY</TextHeading>
                          <ul className="flex flex-col items-start gap-[27px]">
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Returns & Exchange Policy</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Returns Center</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Warranty Policy</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Warranty Registration</Descriptionstyle>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <Descriptionstyle as="p">Warranty Repair Center</Descriptionstyle>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="h-px bg-gray-400" />
                    </div>
                    <div className="flex justify-between items-center gap-5">
                      <Descriptionstyle as="p" className="self-end !font-outfit">
                        Flaerhomes © Copyright 2024, Inc. All rights reserved
                      </Descriptionstyle>
                      <Img
                        src="images/img_social_media.svg"
                        alt="socialmedia_one"
                        className="self-start h-[20px] "
                      />
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
      </>
    </>
  );
}
