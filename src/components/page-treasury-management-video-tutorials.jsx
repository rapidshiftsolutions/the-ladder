// components/page-treasury-management-video-tutorials.jsx
import React from 'react';
import VimeoModalPlayer from "/src/components/VimeoModalPlayer";

const VideoTutorials = () => {
  const videos = [
    {
      videoId: "1072734435",
      hash: "bcb7ab3a54",
      transcript: "If you're looking for a powerful, convenient, secure cash management system in the office or on the go, then take a closer look at eService Business Online. Once logged in, take a look at our dashboard. It specializes in giving you the information that's important to your role in the company. You'll know right away if there's any new communications or items waiting for you to take action. It also includes an at-a-glance view of your account balances. Account information is where you view, research, and generate activity reports. Quick view displays your accounts. Select the transfer icon to make a quick transfer or select an account to view recent transactions. You can also create ad hoc balance reports to organize information exactly the way you need. Search transactions and generate reports and add account alerts. Payments and transfers is where you manage the movement of money. Payment Activity displays a breakdown of today's activity along with your payment transaction summary. You can create ACH batches, initiate wire transfers, transfer funds between accounts, and if authorized, add payees. Control and Reconciliation is where you manage the positive pay items for ACH transactions as well as your paper checks. My Settings is home to your profile, user history, and personal subscriptions. In the upper right, you'll find convenient navigation tools, bulletins, resource center, messages, and a help center offering detailed information about your current page. When finished, we recommend securely logging off, ending your session. eService Business Online. Powerful, convenient, and secure cash management.",
      thumbnailUrl: "/video-thumbnails/Thumbnail-3.svg",
      thumbnailAlt: "Thumbnail for eServis Business Online",
      title: "eServis Business Online"
    },
    {
      videoId: "1072734432",
      hash: "2837b9ee03",
      transcript: "ACH Payments is where authorized employees create batches, manage batch templates, and create mapping files that help import your batch information. New ACH batches are created by selecting a pre-existing template or using the Freeform batch to create a new one. Templates are helpful for batches that repeat and much of the information remains constant, such as payroll. Simply select the template and update the information. such as the payment date and the amounts. If the template contains multiple payees, you can exclude a payee by selecting the checkbox. When ready, request the batch. And if everything looks correct, confirm it. If asked to confirm your identity, simply enter your PIN. That's it. Your batch is added to payment activity and will be processed on the date you selected. To create a free form batch, begin by selecting the company. If applicable, then whether your request will be credit or debit. Next, select the batch type and complete the form, including date, offset account, company entry description, and any notifications you'd like to subscribe to. Once you've entered the specific information for each payee, request the batch and confirm. If asked to confirm your identity, simply enter your password or token code. That's it! Your batch is added to your payment activity and will be processed on your selected date.",
      thumbnailUrl: "/video-thumbnails/Thumbnail-2.svg",
      thumbnailAlt: "Thumbnail for ACH Payments",
      title: "ACH Payments"
    },
    {
      videoId: "1072734440",
      hash: "fd9f56c843",
      transcript: "Wire transfer is where authorized employees initiate wire transfers, manage templates, and import wires created from your accounting software. There are several options available for creating wires. Single wires can be created from scratch. They can be created by selecting a semi-repetitive or fully repetitive template or by selecting a payee. Multiple wires can be requested at one time by including a series of predefined templates. To request a new, Single wire, simply complete the form, such as the payment date, debit account, originator, and amount. Next, the beneficiary information, and if necessary, the corresponding or intermediary financial institution. Finally, the purpose of the payment, additional information for the beneficiary, whether or not you'd like to save the payment as a recurring template, and save the payee. When ready, request your transfer. If everything looks correct, confirm it. If asked to confirm your identity, simply enter your password or token code. That's it. Your wire will be processed on the date you selected and will be added to payment activity. If authorized, you can approve and release the transaction from here. Templates work similar. However, much of the information is pre-populated. Fully repetitive templates are great for payments that remain the same. Simply update the date. Semi-repetitive templates allow greater flexibility, offering future control over dates, currency, amount, and purpose. Either template offers control over notification preferences and whether or not the wire should repeat. Once confirmed, and you've correctly verified your identity, Your new wire is added to your payment activity. If authorized, you can approve and release the transaction right from here.",
      thumbnailUrl: "/video-thumbnails/Thumbnail-1.svg",
      thumbnailAlt: "Thumbnail for Wire Transfers",
      title: "Wire Transfers"
    }
  ];

  return (
    <section id="video-tutorials" className="scroll-mt-24">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="bg-gray-900 text-white px-8 py-6">
          <h2 className="text-2xl font-normal tracking-tight">
            Video Tutorials
          </h2>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {videos.map((video, index) => (
              <div key={index} className="group">
                <div className="relative rounded-lg border border-gray-200 shadow-sm transform transition duration-300 group-hover:scale-[1.02]">
                  <VimeoModalPlayer
                    videoId={video.videoId}
                    hash={video.hash}
                    transcript={video.transcript}
                    thumbnailUrl={video.thumbnailUrl}
                    thumbnailAlt={video.thumbnailAlt}
                  />
                </div>
                <p className="mt-3 font-medium text-center text-gray-900">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTutorials;