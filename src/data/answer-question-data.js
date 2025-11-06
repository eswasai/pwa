const answer_question_data = [
  {
    id: 1,
    category: "Custom Branding",
    question: "What is Custom Branding in Framespik?",
    answer: (
      <>
        Custom Branding allows photographers to personalize their website and
        mobile app with their logo, color scheme, and unique design to create a
        cohesive brand identity.
      </>
    ),
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
  },
  {
    id: 2,
    category: "Custom Branding",
    question: "Can I use my own logo on the app and website?",
    answer: (
      <>
        Yes, you can upload your logo, which will appear on your app and
        website, reinforcing your brand identity for clients.
      </>
    ),
    accordion_id: "headingTwo",
    collapsed: "",
    data_bs_target: "#collapseTwo",
    aria_expanded: true,
    aria_controls: "collapseTwo",
    show: true,
  },
  {
    id: 3,
    category: "Custom Branding",
    question: "How does Custom Branding help my business?",
    answer: (
      <>
        Custom Branding enhances your professional image, builds trust with
        clients, and helps establish a unique identity in the market.
      </>
    ),
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
  },
  {
    id: 4,
    category: "Custom Branding",
    question: "Do I need technical skills to set up Custom Branding?",
    answer: (
      <>
        No technical skills are required. Framespik provides a simple and
        intuitive interface to help you customize your app and website.
      </>
    ),
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
  },
  {
    id: 5,
    category: "Custom Branding",
    question: "Can I update the branding later?",
    answer: (
      <>
        Yes, you can update your branding elements like logos, colors, and other
        details anytime to keep your brand up-to-date.
      </>
    ),
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
  },
  {
    id: 6,
    category: "Custom Branding",
    question: "Does the branded website work on mobile devices?",
    answer: (
      <>
        Yes, all branded websites created with Framespik are mobile-responsive
        and optimized for seamless browsing on any device.
      </>
    ),
    accordion_id: "headingSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSix",
    aria_controls: "collapseSix",
  },
  {
    id: 7,
    category: "Custom Branding",
    question: "What can I showcase on my branded website?",
    answer: (
      <>
        You can showcase your portfolio, service plans, testimonials, and other
        important details that highlight your expertise.
      </>
    ),
    accordion_id: "headingSeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeven",
    aria_controls: "collapseSeven",
  },
  {
    id: 8,
    category: "Custom Branding",
    question: "Can clients book services directly through my branded website?",
    answer: (
      <>
        Yes, the branded website includes booking and inquiry forms to make it
        easy for clients to explore and book your services.
      </>
    ),
    accordion_id: "headingEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseEight",
    aria_controls: "collapseEight",
  },
  {
    id: 9,
    category: "Custom Branding",
    question: "Can I use a custom domain for my branded website?",
    answer: (
      <>
        Yes, Framespik supports custom domains, allowing you to connect your
        unique web address to your branded website.
      </>
    ),
    accordion_id: "headingNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseNine",
    aria_controls: "collapseNine",
  },
  {
    id: 10,
    category: "Custom Branding",
    question: "Does the branded app support notifications?",
    answer: (
      <>
        Yes, the branded app supports notifications to keep your clients updated
        about events, schedules, and other important information.
      </>
    ),
    accordion_id: "headingTen",
    collapsed: "collapsed",
    data_bs_target: "#collapseTen",
    aria_controls: "collapseTen",
  },
  {
    id: 11,
    category: "Memory Page",
    question: "What is a Memory Page?",
    answer: (
      <>
        A Memory Page is a dedicated digital space for each event, featuring
        albums, videos, event details, and tools for sharing or managing privacy
        settings.
      </>
    ),
    accordion_id: "headingEleven",
    collapsed: "collapsed",
    data_bs_target: "#collapseEleven",
    aria_controls: "collapseEleven",
  },
  {
    id: 12,
    category: "Memory Page",
    question: "How can clients access their Memory Page?",
    answer: (
      <>
        Clients receive a personalized email with a link to their Memory Page
        after booking your services and providing the required details.
      </>
    ),
    accordion_id: "headingTwelve",
    collapsed: "",
    data_bs_target: "#collapseTwelve",
    aria_expanded: true,
    aria_controls: "collapseTwelve",
    show: true,
  },
  {
    id: 13,
    category: "Memory Page",
    question: "What content can be added to a Memory Page?",
    answer: (
      <>
        Memory Pages support event details, albums, videos, invitation cards,
        and even a 3D preview of the final printed album.
      </>
    ),
    accordion_id: "headingThirteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirteen",
    aria_controls: "collapseThirteen",
  },
  {
    id: 14,
    category: "Memory Page",
    question: "Can clients customize their Memory Page?",
    answer: (
      <>
        Yes, clients can personalize their Memory Page by managing album
        categories, adding descriptions, and controlling privacy settings for
        specific content.
      </>
    ),
    accordion_id: "headingFourteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFourteen",
    aria_controls: "collapseFourteen",
  },
  {
    id: 15,
    category: "Memory Page",
    question: "How long is content stored on the Memory Page?",
    answer: (
      <>
        Content is stored for a minimum of 180 days by default, with options to
        extend storage for up to 15 years.
      </>
    ),
    accordion_id: "headingFifteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseFifteen",
    aria_controls: "collapseFifteen",
  },
  {
    id: 16,
    category: "Memory Page",
    question: "Can clients share their Memory Page with others?",
    answer: (
      <>
        Yes, clients can share the link to their Memory Page with friends and
        family or choose to keep it private for select individuals.
      </>
    ),
    accordion_id: "headingSixteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixteen",
    aria_controls: "collapseSixteen",
  },
  {
    id: 17,
    category: "Memory Page",
    question: "What privacy controls are available for Memory Pages?",
    answer: (
      <>
        Clients can restrict access to specific albums, videos, or images,
        ensuring that sensitive content remains private.
      </>
    ),
    accordion_id: "headingSeventeen",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventeen",
    aria_controls: "collapseSeventeen",
  },
  {
    id: 18,
    category: "Memory Page",
    question: "What makes the 3D Visual Album feature unique?",
    answer: (
      <>
        The 3D Visual Album provides a realistic preview of the printed album,
        allowing clients to visualize and share their memories in an interactive
        way.
      </>
    ),
    accordion_id: "headingEighteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseEighteen",
    aria_controls: "collapseEighteen",
  },
  {
    id: 19,
    category: "Memory Page",
    question: "Can the Memory Page include event invitations?",
    answer: (
      <>
        Yes, event invitation cards can be added to the Memory Page, making it a
        comprehensive platform for sharing event details.
      </>
    ),
    accordion_id: "headingNineteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseNineteen",
    aria_controls: "collapseNineteen",
  },
  {
    id: 20,
    category: "Memory Page",
    question: "Is the Memory Page accessible on multiple devices?",
    answer: (
      <>
        Yes, Memory Pages are accessible on laptops, mobile devices, and
        tablets, ensuring clients can view their content anywhere.
      </>
    ),
    accordion_id: "headingTwenty",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwenty",
    aria_controls: "collapseTwenty",
  },
  {
    id: 21,
    category: "Photo Selection",
    question: "What is the Photo Selection feature in Framespik?",
    answer: (
      <>
        The Photo Selection feature allows clients to browse, select, and
        finalize images for their album directly from their app or browser.
      </>
    ),
    accordion_id: "headingTwentyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyOne",
    aria_controls: "collapseTwentyOne",
  },
  {
    id: 22,
    category: "Photo Selection",
    question: "Can I select photos from any device?",
    answer: (
      <>
        Yes, the Photo Selection feature works seamlessly across devices,
        including laptops, tablets, and smartphones.
      </>
    ),
    accordion_id: "headingTwentyTwo",
    collapsed: "",
    data_bs_target: "#collapseTwentyTwo",
    aria_expanded: true,
    aria_controls: "collapseTwentyTwo",
    show: true,
  },
  {
    id: 23,
    category: "Photo Selection",
    question: "How does the photo selection process work?",
    answer: (
      <>
        Clients can view their photos online, mark their favorites, and provide
        feedback directly through the app or browser for quick and easy
        selection.
      </>
    ),
    accordion_id: "headingTwentyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyThree",
    aria_controls: "collapseTwentyThree",
  },
  {
    id: 24,
    category: "Photo Selection",
    question: "Can multiple people select photos at the same time?",
    answer: (
      <>
        Yes, multiple users can collaborate and select photos simultaneously,
        making it convenient for family members or teams to work together from
        their own locations.
      </>
    ),
    accordion_id: "headingTwentyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyFour",
    aria_controls: "collapseTwentyFour",
  },
  {
    id: 25,
    category: "Photo Selection",
    question: "Can I select photos from the comfort of my home?",
    answer: (
      <>
        Absolutely! The Photo Selection feature is designed for convenience,
        allowing you to finalize your album without visiting the photographer’s
        studio.
      </>
    ),
    accordion_id: "headingTwentyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyFive",
    aria_controls: "collapseTwentyFive",
  },
  {
    id: 26,
    category: "Photo Selection",
    question: "Is there a limit to the number of photos I can select?",
    answer: (
      <>
        There is no limit to the number of photos you can select; however, the
        final album size will depend on the plan agreed upon with your
        photographer.
      </>
    ),
    accordion_id: "headingTwentySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentySix",
    aria_controls: "collapseTwentySix",
  },
  {
    id: 27,
    category: "Photo Selection",
    question: "Can I see suggestions for my album layout during selection?",
    answer: (
      <>
        Yes, the system can provide album layout suggestions, helping you
        visualize how the selected images will appear in the final design.
      </>
    ),
    accordion_id: "headingTwentySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentySeven",
    aria_controls: "collapseTwentySeven",
  },
  {
    id: 28,
    category: "Photo Selection",
    question: "What happens after I finalize my photo selections?",
    answer: (
      <>
        Once finalized, your photographer will receive the selected images along
        with your preferences, making it easier to proceed with album creation.
      </>
    ),
    accordion_id: "headingTwentyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyEight",
    aria_controls: "collapseTwentyEight",
  },
  {
    id: 29,
    category: "Photo Selection",
    question: "Can I leave comments or feedback on specific photos?",
    answer: (
      <>
        Yes, you can add comments or feedback on individual photos, which will
        be visible to the photographer for better customization.
      </>
    ),
    accordion_id: "headingTwentyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwentyNine",
    aria_controls: "collapseTwentyNine",
  },
  {
    id: 30,
    category: "Photo Selection",
    question: "Can photos be selected in multiple sessions?",
    answer: (
      <>
        Yes, the system saves your progress, allowing you to select photos in
        multiple sessions at your own pace.
      </>
    ),
    accordion_id: "headingThirty",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirty",
    aria_controls: "collapseThirty",
  },
  {
    id: 31,
    category: "Data Secure",
    question: "What does the Data Secure feature do?",
    answer: (
      <>
        The Data Secure feature ensures your event and media data is protected
        against data loss, corruption, and damage, with encryption and safety
        protocols in place.
      </>
    ),
    accordion_id: "headingThirtyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyOne",
    aria_controls: "collapseThirtyOne",
  },
  {
    id: 32,
    category: "Data Secure",
    question: "Is there any additional cost for storing unused data?",
    answer: (
      <>
        No, you don't need to pay extra for data that remains unused within the
        storage period. You only pay when you require additional access or
        extended storage time.
      </>
    ),
    accordion_id: "headingThirtyTwo",
    collapsed: "",
    data_bs_target: "#collapseThirtyTwo",
    aria_expanded: true,
    aria_controls: "collapseThirtyTwo",
    show: true,
  },
  {
    id: 33,
    category: "Data Secure",
    question: "What happens if my hard disk fails?",
    answer: (
      <>
        With Framespik's secure cloud backup, you don't need to worry about hard
        disk failures or physical damage. Your data is stored safely in the
        cloud, always accessible and protected.
      </>
    ),
    accordion_id: "headingThirtyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyThree",
    aria_controls: "collapseThirtyThree",
  },
  {
    id: 34,
    category: "Data Secure",
    question: "Can I access my data even after the backup period ends?",
    answer: (
      <>
        Yes, even if the default backup period ends, you can still access your
        data. If needed, you can opt for an extension to keep the data available
        for longer.
      </>
    ),
    accordion_id: "headingThirtyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyFour",
    aria_controls: "collapseThirtyFour",
  },
  {
    id: 35,
    category: "Data Secure",
    question: "Is my data safe from physical disasters like fire or flooding?",
    answer: (
      <>
        Yes, your data is stored in secure, distributed cloud systems that are
        protected from physical disasters, such as fire or flooding, ensuring
        its safety at all times.
      </>
    ),
    accordion_id: "headingThirtyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyFive",
    aria_controls: "collapseThirtyFive",
  },
  {
    id: 36,
    category: "Data Secure",
    question: "How is my data protected from hacking or unauthorized access?",
    answer: (
      <>
        Your data is encrypted with high-level security protocols, and access is
        restricted through multi-factor authentication, ensuring that only
        authorized individuals can access it.
      </>
    ),
    accordion_id: "headingThirtySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtySix",
    aria_controls: "collapseThirtySix",
  },
  {
    id: 37,
    category: "Data Secure",
    question: "What if I forget to back up my data on time?",
    answer: (
      <>
        Framespik automatically backs up your data as it is uploaded. There’s no
        need to worry about forgetting; your files are protected and saved
        continuously.
      </>
    ),
    accordion_id: "headingThirtySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtySeven",
    aria_controls: "collapseThirtySeven",
  },
  {
    id: 38,
    category: "Data Secure",
    question: "Can I choose when to pay for additional data storage?",
    answer: (
      <>
        Yes, you only pay for additional storage when you need it. If your data
        is not accessed within the backup period, you will not incur extra
        costs.
      </>
    ),
    accordion_id: "headingThirtyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyEight",
    aria_controls: "collapseThirtyEight",
  },
  {
    id: 39,
    category: "Data Secure",
    question:
      "How does Framespik protect against data loss caused by human error?",
    answer: (
      <>
        Framespik's secure cloud environment keeps multiple versions of your
        data, allowing for recovery even in the case of accidental deletion or
        modification by users.
      </>
    ),
    accordion_id: "headingThirtyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseThirtyNine",
    aria_controls: "collapseThirtyNine",
  },
  {
    id: 40,
    category: "Data Secure",
    question:
      "Is there a way to ensure my data stays intact for long periods without worry?",
    answer: (
      <>
        Yes, you can extend your data storage for long-term use, ensuring your
        important files remain secure and easily accessible without worrying
        about hardware issues or expiration.
      </>
    ),
    accordion_id: "headingForty",
    collapsed: "collapsed",
    data_bs_target: "#collapseForty",
    aria_controls: "collapseForty",
  },
  {
    id: 41,
    category: "Storage",
    question: "How much free storage do I get with Framespik?",
    answer: (
      <>
        Framespik provides 1TB of free storage to photographers, which is more
        than enough to store large amounts of event data, including photos,
        videos, and documents.
      </>
    ),
    accordion_id: "headingFortyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyOne",
    aria_controls: "collapseFortyOne",
  },
  {
    id: 42,
    category: "Storage",
    question: "Can I expand the 1TB of free storage?",
    answer: (
      <>
        Yes, you can easily expand your storage as needed. Framespik offers
        scalable storage options, allowing you to add more space to accommodate
        your growing business needs.
      </>
    ),
    accordion_id: "headingFortyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyTwo",
    aria_controls: "collapseFortyTwo",
  },
  {
    id: 43,
    category: "Storage",
    question: "How much storage can I upgrade to?",
    answer: (
      <>
        You can upgrade to storage options beyond 1TB. Framespik allows you to
        scale your storage all the way up to unlimited capacity, ensuring you
        never run out of space.
      </>
    ),
    accordion_id: "headingFortyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyThree",
    aria_controls: "collapseFortyThree",
  },
  {
    id: 44,
    category: "Storage",
    question: "Is there any cost associated with exceeding the free storage?",
    answer: (
      <>
        There is no cost if your data is within the free 1TB limit. If you need
        more space, you can upgrade your storage plan to accommodate additional
        data at a reasonable cost.
      </>
    ),
    accordion_id: "headingFortyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyFour",
    aria_controls: "collapseFortyFour",
  },
  {
    id: 45,
    category: "Storage",
    question:
      "Can I store both original and compressed files in the provided storage?",
    answer: (
      <>
        Yes, Framespik’s 1TB of free storage can handle both original and
        compressed files, giving you flexibility in managing your media content.
      </>
    ),
    accordion_id: "headingFortyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyFive",
    aria_controls: "collapseFortyFive",
  },
  {
    id: 46,
    category: "Storage",
    question: "Do I need to pay extra if I don't access my files for a while?",
    answer: (
      <>
        No, you only pay when you need to access or upgrade your storage. If
        your files are stored but not accessed within the backup period, there’s
        no additional charge.
      </>
    ),
    accordion_id: "headingFortySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortySix",
    aria_controls: "collapseFortySix",
  },
  {
    id: 47,
    category: "Shared Cloud Space",
    question: "What is Shared Cloud Space for my team?",
    answer: (
      <>
        Shared Cloud Space allows photographers to allocate portions of their
        storage to different team members, enabling them to store and access
        work-related data within a shared environment.
      </>
    ),
    accordion_id: "headingFortySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortySeven",
    aria_controls: "collapseFortySeven",
  },
  {
    id: 48,
    category: "Shared Cloud Space",
    question: "Can I control who has access to the shared cloud space?",
    answer: (
      <>
        Yes, you can manage access permissions for each team member, ensuring
        that only authorized individuals can view, edit, or upload data to
        specific parts of the shared cloud space.
      </>
    ),
    accordion_id: "headingFortyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyEight",
    aria_controls: "collapseFortyEight",
  },
  {
    id: 49,
    category: "Shared Cloud Space",
    question: "Can team members upload files to the shared cloud space?",
    answer: (
      <>
        Absolutely! Team members can upload files, share images, documents, and
        media, making it easier to collaborate and manage data within a central
        cloud space.
      </>
    ),
    accordion_id: "headingFortyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseFortyNine",
    aria_controls: "collapseFortyNine",
  },
  {
    id: 50,
    category: "Shared Cloud Space",
    question: "Is the shared cloud space secure?",
    answer: (
      <>
        Yes, the shared cloud space is protected with encryption and secure
        access protocols. You can be assured that only authorized team members
        will have access to the data.
      </>
    ),
    accordion_id: "headingFifty",
    collapsed: "collapsed",
    data_bs_target: "#collapseFifty",
    aria_controls: "collapseFifty",
  },
  {
    id: 51,
    category: "Shared Cloud Space",
    question: "How much shared cloud space can I allocate to my team?",
    answer: (
      <>
        The amount of shared cloud space you can allocate depends on your
        storage plan. You can assign portions of your purchased storage to
        different team members based on their needs.
      </>
    ),
    accordion_id: "headingFiftyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyOne",
    aria_controls: "collapseFiftyOne",
  },
  {
    id: 52,
    category: "Storage Rental",
    question: "What is storage rental in Framespik?",
    answer: (
      <>
        Storage rental allows photographers to temporarily store large volumes
        of event data, which can be accessed by clients directly from a rented
        cloud space for the duration of their event.
      </>
    ),
    accordion_id: "headingFiftyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyTwo",
    aria_controls: "collapseFiftyTwo",
  },
  {
    id: 53,
    category: "Storage Rental",
    question: "How long can I rent storage for?",
    answer: (
      <>
        You can rent storage for any period that suits your needs. Whether it's
        for a few weeks or several months, the rental duration is flexible and
        can be customized.
      </>
    ),
    accordion_id: "headingFiftyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyThree",
    aria_controls: "collapseFiftyThree",
  },
  {
    id: 54,
    category: "Storage Rental",
    question: "How do I rent storage space?",
    answer: (
      <>
        Renting storage space is simple. Just log into your Framespik account,
        choose the amount of storage you need, and select the rental period.
        It’s all handled within the platform.
      </>
    ),
    accordion_id: "headingFiftyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyFour",
    aria_controls: "collapseFiftyFour",
  },
  {
    id: 55,
    category: "Storage Rental",
    question: "Can clients access rented storage directly?",
    answer: (
      <>
        Yes, clients can access the rented storage space directly. You can
        provide them with a secure link to download or view the event data,
        making it convenient for them to get the content they need.
      </>
    ),
    accordion_id: "headingFiftyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyFive",
    aria_controls: "collapseFiftyFive",
  },
  {
    id: 56,
    category: "Storage Rental",
    question: "Is there a cost for renting storage?",
    answer: (
      <>
        Yes, there is a cost associated with storage rentals. The price depends
        on the amount of storage you need and the rental duration. You’ll only
        pay for what you use during the rental period.
      </>
    ),
    accordion_id: "headingFiftySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftySix",
    aria_controls: "collapseFiftySix",
  },
  {
    id: 57,
    category: "Storage Rental",
    question: "What happens to the rented storage once the rental period ends?",
    answer: (
      <>
        Once the rental period ends, your rented storage will expire, and you
        will no longer have access to it unless you extend or renew the rental
        period. You can download or transfer your data before the period
        expires.
      </>
    ),
    accordion_id: "headingFiftySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftySeven",
    aria_controls: "collapseFiftySeven",
  },
  {
    id: 58,
    category: "Vision Camera",
    question: "What is the Vision Camera feature?",
    answer: (
      <>
        The Vision Camera feature suggests ideal poses for your photoshoots
        based on the location and objects around you, helping clients and
        photographers capture the perfect shots every time.
      </>
    ),
    accordion_id: "headingFiftyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyEight",
    aria_controls: "collapseFiftyEight",
  },
  {
    id: 59,
    category: "Vision Camera",
    question: "How does the Vision Camera suggest poses?",
    answer: (
      <>
        The Vision Camera uses location data (such as a beach, park, or indoor
        space) and objects present (like a car or tree) to suggest relevant
        poses, ensuring the best results for every shoot.
      </>
    ),
    accordion_id: "headingFiftyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseFiftyNine",
    aria_controls: "collapseFiftyNine",
  },
  {
    id: 60,
    category: "Vision Camera",
    question: "Can the Vision Camera suggest poses for different events?",
    answer: (
      <>
        Yes, the Vision Camera is versatile and can suggest poses for a wide
        range of events, from weddings to family photoshoots and outdoor
        sessions, making it ideal for all types of photography.
      </>
    ),
    accordion_id: "headingSixty",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixty",
    aria_controls: "collapseSixty",
  },
  {
    id: 61,
    category: "Vision Camera",
    question: "Can I customize the suggested poses from the Vision Camera?",
    answer: (
      <>
        While the Vision Camera offers intelligent pose suggestions, you can
        adjust or customize the poses based on your creative preferences to
        ensure they align with your vision for the photoshoot.
      </>
    ),
    accordion_id: "headingSixtyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyOne",
    aria_controls: "collapseSixtyOne",
  },
  {
    id: 62,
    category: "Vision Camera",
    question: "How does the Vision Camera help with outdoor photoshoots?",
    answer: (
      <>
        The Vision Camera enhances outdoor photoshoots by factoring in
        environmental elements like lighting, objects, and scenery, offering
        dynamic pose suggestions that make the most of the natural surroundings.
      </>
    ),
    accordion_id: "headingSixtyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyTwo",
    aria_controls: "collapseSixtyTwo",
  },
  {
    id: 63,
    category: "Vision Camera",
    question: "Does the Vision Camera learn from previous shoots?",
    answer: (
      <>
        Yes, the Vision Camera learns from past photoshoots, improving its pose
        suggestions over time based on the locations and objects you've worked
        with in previous sessions, offering smarter recommendations.
      </>
    ),
    accordion_id: "headingSixtyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyThree",
    aria_controls: "collapseSixtyThree",
  },
  {
    id: 64,
    category: "Event Backup",
    question: "What is event backup?",
    answer: (
      <>
        Event backup is a secure, long-term data storage solution for clients,
        ensuring that their event media (photos, videos, and documents) is
        safely preserved for extended periods after the event.
      </>
    ),
    accordion_id: "headingSixtyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyFour",
    aria_controls: "collapseSixtyFour",
  },
  {
    id: 65,
    category: "Event Backup",
    question: "How long can I back up my event data?",
    answer: (
      <>
        You can choose backup durations of 3, 5, 10, or 15 years, depending on
        your needs. These options ensure that your event media remains safely
        stored for as long as you require.
      </>
    ),
    accordion_id: "headingSixtyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyFive",
    aria_controls: "collapseSixtyFive",
  },
  {
    id: 66,
    category: "Event Backup",
    question: "Who is event backup intended for?",
    answer: (
      <>
        Event backup is designed specifically for your clients. It ensures that
        the media from their events, such as weddings or parties, is stored
        securely for long periods, even after the event has concluded.
      </>
    ),
    accordion_id: "headingSixtySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtySix",
    aria_controls: "collapseSixtySix",
  },
  {
    id: 67,
    category: "Event Backup",
    question: "Is event backup the same as data safe?",
    answer: (
      <>
        No, event backup is different from data safe. Event backup is focused on
        securely storing event-related content for your clients, while data safe
        ensures the protection of business-related data for photographers, such
        as contracts, finances, and work records.
      </>
    ),
    accordion_id: "headingSixtySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtySeven",
    aria_controls: "collapseSixtySeven",
  },
  {
    id: 68,
    category: "Event Backup",
    question: "Do I need to pay for event backup every year?",
    answer: (
      <>
        No, you only pay for the initial duration (3, 5, 10, or 15 years) when
        setting up the backup. After that, your client's event media will remain
        stored for the specified period without any additional yearly payments.
      </>
    ),
    accordion_id: "headingSixtyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyEight",
    aria_controls: "collapseSixtyEight",
  },
  {
    id: 69,
    category: "Event Backup",
    question: "How do clients access their event backup?",
    answer: (
      <>
        Clients can easily access their event backup via a secure link or
        through their personalized memory page, where they can view and download
        their media even after years of storage.
      </>
    ),
    accordion_id: "headingSixtyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseSixtyNine",
    aria_controls: "collapseSixtyNine",
  },
  {
    id: 70,
    category: "Event Backup",
    question: "Can I change the backup duration after setting it up?",
    answer: (
      <>
        Yes, you can change the backup duration anytime before the current plan
        expires. If you want to extend the storage period beyond the original
        choice, you can simply upgrade to a longer plan.
      </>
    ),
    accordion_id: "headingSeventy",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventy",
    aria_controls: "collapseSeventy",
  },
  {
    id: 71,
    category: "AI Face Scan",
    question: "What is AI face scan image delivery?",
    answer: (
      <>
        AI face scan image delivery allows clients to share event media with
        guests by enabling them to scan their faces and retrieve images
        featuring them, providing a personalized and efficient experience.
      </>
    ),
    accordion_id: "headingSeventyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyOne",
    aria_controls: "collapseSeventyOne",
  },
  {
    id: 72,
    category: "AI Face Scan",
    question: "How does the AI face scan work?",
    answer: (
      <>
        The AI face scan technology identifies faces in the event photos and
        allows guests to easily access images that feature them, simply by
        scanning their face using a smartphone or device.
      </>
    ),
    accordion_id: "headingSeventyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyTwo",
    aria_controls: "collapseSeventyTwo",
  },
  {
    id: 73,
    category: "AI Face Scan",
    question: "Can guests see all the event photos?",
    answer: (
      <>
        Guests can only see images that contain their own face, ensuring privacy
        and making the experience more personal. They cannot access images of
        other guests unless they are included in those photos.
      </>
    ),
    accordion_id: "headingSeventyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyThree",
    aria_controls: "collapseSeventyThree",
  },
  {
    id: 74,
    category: "AI Face Scan",
    question: "Is AI face scan available for all types of events?",
    answer: (
      <>
        Yes, the AI face scan image delivery feature works for any type of
        event, from weddings to parties, corporate gatherings, and more,
        ensuring every guest can easily find their images.
      </>
    ),
    accordion_id: "headingSeventyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyFour",
    aria_controls: "collapseSeventyFour",
  },
  {
    id: 75,
    category: "AI Face Scan",
    question: "Can the AI face scan recognize faces from any angle?",
    answer: (
      <>
        Yes, the AI technology is designed to recognize faces from multiple
        angles and lighting conditions, ensuring that even candid or group shots
        can be scanned and linked to the right guest.
      </>
    ),
    accordion_id: "headingSeventyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyFive",
    aria_controls: "collapseSeventyFive",
  },
  {
    id: 76,
    category: "AI Face Scan",
    question: "Is the AI face scan feature available in the client app?",
    answer: (
      <>
        Yes, the AI face scan feature is available in the client app, where
        guests can scan their faces to view and download photos that feature
        them, creating a seamless and convenient experience.
      </>
    ),
    accordion_id: "headingSeventySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventySix",
    aria_controls: "collapseSeventySix",
  },
  {
    id: 77,
    category: "4K Upload",
    question: "What is 4K video and image upload?",
    answer: (
      <>
        4K video and image upload allows you to upload and store high-resolution
        4K media, ensuring that your photos and videos are stored in the highest
        quality available for optimal viewing and preservation.
      </>
    ),
    accordion_id: "headingSeventySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventySeven",
    aria_controls: "collapseSeventySeven",
  },
  {
    id: 78,
    category: "4K Upload",
    question: "How do I upload 4K images and videos?",
    answer: (
      <>
        You can easily upload 4K images and videos through the Framespik
        platform, either via the desktop app or client portal. Just select the
        media files you wish to upload, and the platform will handle the rest.
      </>
    ),
    accordion_id: "headingSeventyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyEight",
    aria_controls: "collapseSeventyEight",
  },
  {
    id: 79,
    category: "4K Upload",
    question: "Are there any file size limits for 4K uploads?",
    answer: (
      <>
        While 4K media files can be large, Framespik supports high-capacity
        uploads. You may encounter upload limits depending on your internet
        connection, but the platform offers efficient ways to handle large
        files.
      </>
    ),
    accordion_id: "headingSeventyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseSeventyNine",
    aria_controls: "collapseSeventyNine",
  },
  {
    id: 80,
    category: "4K Upload",
    question: "Can I view or share 4K images and videos?",
    answer: (
      <>
        Yes, you can view and share 4K images and videos directly from the
        platform. The high-resolution files are fully supported across all
        devices, ensuring a rich and immersive viewing experience for your
        clients and guests.
      </>
    ),
    accordion_id: "headingEighty",
    collapsed: "collapsed",
    data_bs_target: "#collapseEighty",
    aria_controls: "collapseEighty",
  },
  {
    id: 81,
    category: "4K Upload",
    question: "Is there any quality loss when uploading 4K media?",
    answer: (
      <>
        No, uploading 4K media through Framespik ensures there is no loss of
        quality. The platform preserves the resolution of your images and
        videos, maintaining their clarity and sharpness during storage and
        delivery.
      </>
    ),
    accordion_id: "headingEightyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyOne",
    aria_controls: "collapseEightyOne",
  },
  {
    id: 82,
    category: "4K Upload",
    question: "Can I upload 4K images and videos from my mobile device?",
    answer: (
      <>
        Yes, you can upload 4K images and videos from both mobile devices and
        desktops. Framespik provides seamless integration for uploading media
        from any device, making it easy for you to store and manage your
        content.
      </>
    ),
    accordion_id: "headingEightyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyTwo",
    aria_controls: "collapseEightyTwo",
  },
  {
    id: 83,
    category: "3D Albums",
    question: "What is an unlimited 3D album?",
    answer: (
      <>
        An unlimited 3D album allows you to create a virtual, interactive album
        that showcases your photos and videos in a three-dimensional format.
        With unlimited albums, you can create as many albums as needed without
        worrying about storage limits.
      </>
    ),
    accordion_id: "headingEightyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyThree",
    aria_controls: "collapseEightyThree",
  },
  {
    id: 84,
    category: "3D Albums",
    question: "How does the 3D album feature work?",
    answer: (
      <>
        The 3D album feature lets you upload and organize photos in an
        immersive, 3D space. Clients can interact with the album, rotating and
        zooming to view images in greater detail. This creates an engaging
        experience for users.
      </>
    ),
    accordion_id: "headingEightyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyFour",
    aria_controls: "collapseEightyFour",
  },
  {
    id: 85,
    category: "3D Albums",
    question: "Can I add videos to my 3D album?",
    answer: (
      <>
        Yes, you can add videos to your 3D album along with images. The feature
        supports both media types, ensuring that your entire event content is
        showcased in a dynamic and interactive way.
      </>
    ),
    accordion_id: "headingEightyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyFive",
    aria_controls: "collapseEightyFive",
  },
  {
    id: 86,
    category: "3D Albums",
    question: "Can clients share the 3D albums?",
    answer: (
      <>
        Yes, clients can easily share their 3D albums with friends and family
        through a link, providing them with a unique and immersive way to
        experience the event memories. Sharing is simple and seamless.
      </>
    ),
    accordion_id: "headingEightySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightySix",
    aria_controls: "collapseEightySix",
  },
  {
    id: 87,
    category: "3D Albums",
    question: "Is there a limit to how many 3D albums I can create?",
    answer: (
      <>
        No, with the unlimited 3D album feature, you can create as many albums
        as you need without any storage restrictions. This ensures you can
        organize and present your content flexibly and efficiently.
      </>
    ),
    accordion_id: "headingEightySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightySeven",
    aria_controls: "collapseEightySeven",
  },
  {
    id: 88,
    category: "3D Albums",
    question: "Are 3D albums accessible on all devices?",
    answer: (
      <>
        Yes, 3D albums are fully accessible on all devices, including desktops,
        tablets, and smartphones. Clients can interact with the albums no matter
        where they are, providing a consistent experience across platforms.
      </>
    ),
    accordion_id: "headingEightyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyEight",
    aria_controls: "collapseEightyEight",
  },
  {
    id: 89,
    category: "3rd Party Integrations",
    question: "What are third-party integrations?",
    answer: (
      <>
        Third-party integrations allow Framespik to connect with external
        services like cloud storage providers and domain providers, enhancing
        the platform's functionality and flexibility for photographers.
      </>
    ),
    accordion_id: "headingEightyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseEightyNine",
    aria_controls: "collapseEightyNine",
  },
  {
    id: 90,
    category: "3rd Party Integrations",
    question: "Which third-party storage providers are supported?",
    answer: (
      <>
        Framespik integrates with popular cloud storage providers like pCloud
        and Mega, giving you additional storage options for your media and
        ensuring secure, scalable storage for your files.
      </>
    ),
    accordion_id: "headingNinety",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinety",
    aria_controls: "collapseNinety",
  },
  {
    id: 91,
    category: "3rd Party Integrations",
    question: "Can I use my own domain for my Framespik website?",
    answer: (
      <>
        Yes, you can use a custom domain for your Framespik website. The
        platform supports integrations with domain providers like GoDaddy and
        Hostinger, allowing you to personalize your site with your own branding.
      </>
    ),
    accordion_id: "headingNinetyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyOne",
    aria_controls: "collapseNinetyOne",
  },
  {
    id: 92,
    category: "3rd Party Integrations",
    question: "How do I integrate a custom domain with Framespik?",
    answer: (
      <>
        To integrate a custom domain, simply purchase a domain through a
        supported provider like GoDaddy or Hostinger and follow the easy steps
        in the Framespik dashboard to link it to your website.
      </>
    ),
    accordion_id: "headingNinetyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyTwo",
    aria_controls: "collapseNinetyTwo",
  },
  {
    id: 93,
    category: "3rd Party Integrations",
    question:
      "Do I need technical knowledge to integrate third-party services?",
    answer: (
      <>
        No, integrating third-party services like storage or domain providers is
        designed to be simple. The Framespik dashboard provides easy-to-follow
        instructions, and no technical expertise is required.
      </>
    ),
    accordion_id: "headingNinetyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyThree",
    aria_controls: "collapseNinetyThree",
  },
  {
    id: 94,
    category: "3rd Party Integrations",
    question: "Are there any additional costs for third-party integrations?",
    answer: (
      <>
        The use of third-party integrations may incur costs based on the
        services you choose. For instance, using a custom domain or additional
        cloud storage providers may involve fees charged by those providers.
      </>
    ),
    accordion_id: "headingNinetyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyFour",
    aria_controls: "collapseNinetyFour",
  },
  {
    id: 95,
    category: "Work Updates",
    question: "What are work updates?",
    answer: (
      <>
        Work updates keep clients informed about the progress of their event,
        including milestones, tasks completed, and any changes. This ensures
        clear communication between photographers and clients throughout the
        entire process.
      </>
    ),
    accordion_id: "headingNinetyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyFive",
    aria_controls: "collapseNinetyFive",
  },
  {
    id: 96,
    category: "Work Updates",
    question: "How can I send work updates to clients?",
    answer: (
      <>
        Work updates are automatically sent to clients through the Framespik
        platform. You can also manually add progress notes and status updates,
        which clients will receive via email or app notifications.
      </>
    ),
    accordion_id: "headingNinetySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetySix",
    aria_controls: "collapseNinetySix",
  },
  {
    id: 97,
    category: "Work Updates",
    question: "Can I update work progress for multiple clients at once?",
    answer: (
      <>
        Yes, you can update work progress for multiple clients simultaneously.
        Framespik provides an easy-to-use interface that allows you to manage
        and track multiple events, ensuring that all clients stay up-to-date.
      </>
    ),
    accordion_id: "headingNinetySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetySeven",
    aria_controls: "collapseNinetySeven",
  },
  {
    id: 98,
    category: "Work Updates",
    question: "How do clients receive work updates?",
    answer: (
      <>
        Clients receive work updates through email notifications or directly
        within their personalized client app. The app and email contain detailed
        information about the event progress, ensuring clients are always
        informed.
      </>
    ),
    accordion_id: "headingNinetyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyEight",
    aria_controls: "collapseNinetyEight",
  },
  {
    id: 99,
    category: "Work Updates",
    question: "Can I add images or videos to work updates?",
    answer: (
      <>
        Yes, you can easily add images, videos, or other media files to work
        updates. This allows clients to visually track the progress of their
        event, enhancing the communication and collaboration process.
      </>
    ),
    accordion_id: "headingNinetyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseNinetyNine",
    aria_controls: "collapseNinetyNine",
  },
  {
    id: 100,
    category: "Work Updates",
    question: "Can work updates be scheduled for automatic delivery?",
    answer: (
      <>
        Yes, work updates can be scheduled for automatic delivery at specific
        intervals. This feature ensures that clients are kept informed at
        regular points throughout the event process without requiring manual
        input.
      </>
    ),
    accordion_id: "headingOneHundred",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundred",
    aria_controls: "collapseOneHundred",
  },
  {
    id: 101,
    category: "Payment Reminders",
    question: "What are payment reminders?",
    answer: (
      <>
        Payment reminders are automated notifications sent to clients to remind
        them of upcoming or overdue payments. These reminders ensure that
        payments are tracked and clients are informed without requiring manual
        follow-up.
      </>
    ),
    accordion_id: "headingOneHundredOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredOne",
    aria_controls: "collapseOneHundredOne",
  },
  {
    id: 102,
    category: "Payment Reminders",
    question: "How do payment reminders work?",
    answer: (
      <>
        Payment reminders are sent automatically based on the payment schedule
        you set for your services. These reminders can be triggered by specific
        dates, such as when a due payment is approaching or overdue.
      </>
    ),
    accordion_id: "headingOneHundredTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwo",
    aria_controls: "collapseOneHundredTwo",
  },
  {
    id: 103,
    category: "Payment Reminders",
    question: "Can I customize the payment reminder messages?",
    answer: (
      <>
        Yes, you can customize the content of the payment reminder messages to
        fit your brand's tone and style. Personalizing the reminders ensures
        they align with your communication approach.
      </>
    ),
    accordion_id: "headingOneHundredThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThree",
    aria_controls: "collapseOneHundredThree",
  },
  {
    id: 104,
    category: "Payment Reminders",
    question: "Can I send payment reminders for multiple clients at once?",
    answer: (
      <>
        Yes, Framespik allows you to send payment reminders for multiple clients
        simultaneously. This makes it easy to manage and track payments for all
        your clients without having to send individual reminders.
      </>
    ),
    accordion_id: "headingOneHundredFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredFour",
    aria_controls: "collapseOneHundredFour",
  },
  {
    id: 105,
    category: "Payment Reminders",
    question:
      "What happens if a client doesn't pay after receiving a reminder?",
    answer: (
      <>
        If a client doesn't pay after receiving a reminder, you can set up
        additional follow-ups or escalate the reminder. Framespik also allows
        you to track outstanding payments and ensure that nothing falls through
        the cracks.
      </>
    ),
    accordion_id: "headingOneHundredFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredFive",
    aria_controls: "collapseOneHundredFive",
  },
  {
    id: 106,
    category: "Payment Reminders",
    question: "Can I set up payment reminders for different payment stages?",
    answer: (
      <>
        Yes, you can set up reminders for various payment stages, such as
        advance payments, partial payments, and final payments. This ensures
        that clients are reminded of each stage and helps keep the payment
        process organized.
      </>
    ),
    accordion_id: "headingOneHundredSix",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredSix",
    aria_controls: "collapseOneHundredSix",
  },
  {
    id: 107,
    category: "Payment Reminders",
    question: "How are payment reminders sent?",
    answer: (
      <>
        Payment reminders are sent via email or push notifications through the
        client app. The method of delivery can be chosen based on your
        preferences, ensuring that your clients receive timely notifications.
      </>
    ),
    accordion_id: "headingOneHundredSeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredSeven",
    aria_controls: "collapseOneHundredSeven",
  },
  {
    id: 108,
    category: "Payment Reminders",
    question: "Can I track which clients have received reminders?",
    answer: (
      <>
        Yes, Framespik allows you to track which clients have received payment
        reminders. This feature helps you monitor the status of payments and
        ensures that follow-ups are sent when necessary.
      </>
    ),
    accordion_id: "headingOneHundredEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredEight",
    aria_controls: "collapseOneHundredEight",
  },
  {
    id: 109,
    category: "Payment Reminders",
    question: "Can I automate reminders for future events?",
    answer: (
      <>
        Yes, you can set up automated payment reminders for future events. These
        reminders will be triggered based on the payment schedule you set,
        ensuring that your clients are notified well in advance of payment due
        dates.
      </>
    ),
    accordion_id: "headingOneHundredNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredNine",
    aria_controls: "collapseOneHundredNine",
  },
  {
    id: 110,
    category: "Payment Reminders",
    question: "Can clients respond to payment reminders?",
    answer: (
      <>
        Clients can respond to payment reminders through email or the client
        app. They can confirm payment, request extensions, or ask for more
        information about their payment status, ensuring seamless communication.
      </>
    ),
    accordion_id: "headingOneHundredTen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTen",
    aria_controls: "collapseOneHundredTen",
  },
  {
    id: 111,
    category: "Anywhere View",
    question: "What is the Anywhere View feature?",
    answer: (
      <>
        Anywhere View allows clients to access their event content—such as
        albums, videos, and images—on any device, including TVs, laptops, or
        mobile phones, no matter where they are. This ensures clients can enjoy
        their memories from any location.
      </>
    ),
    accordion_id: "headingOneHundredEleven",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredEleven",
    aria_controls: "collapseOneHundredEleven",
  },
  {
    id: 112,
    category: "Anywhere View",
    question: "Do I need a special app to use Anywhere View?",
    answer: (
      <>
        No, you don't need a special app. Clients can use any device with a web
        browser, and they can access the media directly through a link or their
        client app.
      </>
    ),
    accordion_id: "headingOneHundredTwelve",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwelve",
    aria_controls: "collapseOneHundredTwelve",
  },
  {
    id: 113,
    category: "Anywhere View",
    question: "Can clients view their event content on a TV?",
    answer: (
      <>
        Yes, clients can view their event albums, images, and videos on any
        smart TV, provided they have access to the link or app. This provides a
        more immersive way to relive their memories.
      </>
    ),
    accordion_id: "headingOneHundredThirteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirteen",
    aria_controls: "collapseOneHundredThirteen",
  },
  {
    id: 114,
    category: "Anywhere View",
    question: "Can I restrict access to the event content on Anywhere View?",
    answer: (
      <>
        Yes, you can control who has access to your event content by setting
        privacy settings. This gives you full control over who can view the
        media and ensures your content remains secure.
      </>
    ),
    accordion_id: "headingOneHundredFourteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredFourteen",
    aria_controls: "collapseOneHundredFourteen",
  },
  {
    id: 115,
    category: "Anywhere View",
    question: "Is Anywhere View available on all devices?",
    answer: (
      <>
        Anywhere View is compatible with most devices that have internet access,
        including smartphones, tablets, laptops, and desktops. This ensures that
        clients can access their event data wherever they are.
      </>
    ),
    accordion_id: "headingOneHundredFifteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredFifteen",
    aria_controls: "collapseOneHundredFifteen",
  },
  {
    id: 116,
    category: "Anywhere View",
    question: "Can guests also view the event content using Anywhere View?",
    answer: (
      <>
        Yes, guests who have received access links can also view the event
        content through Anywhere View. This allows everyone involved in the
        event to access shared memories from their own devices.
      </>
    ),
    accordion_id: "headingOneHundredSixteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredSixteen",
    aria_controls: "collapseOneHundredSixteen",
  },
  {
    id: 117,
    category: "NFC Cards",
    question: "What are NFC cards?",
    answer: (
      <>
        NFC cards are durable, unbreakable cards containing event data that can
        be accessed via NFC (Near Field Communication) or a QR code. These cards
        provide a convenient, portable way for clients to access their event
        content securely.
      </>
    ),
    accordion_id: "headingOneHundredSeventeen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredSeventeen",
    aria_controls: "collapseOneHundredSeventeen",
  },
  {
    id: 118,
    category: "NFC Cards",
    question: "How do NFC cards work?",
    answer: (
      <>
        NFC cards work by transmitting data to nearby devices that support NFC
        technology, such as smartphones. You can scan the NFC chip or use the QR
        code to access event-related content, like photos, videos, or albums.
      </>
    ),
    accordion_id: "headingOneHundredEighteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredEighteen",
    aria_controls: "collapseOneHundredEighteen",
  },
  {
    id: 119,
    category: "NFC Cards",
    question: "Are NFC cards safe and secure?",
    answer: (
      <>
        Yes, NFC cards are secure. The data stored on the card is encrypted,
        ensuring that only authorized individuals can access it. Additionally,
        you can control access by linking the card to a specific account or
        event data.
      </>
    ),
    accordion_id: "headingOneHundredNineteen",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredNineteen",
    aria_controls: "collapseOneHundredNineteen",
  },
  {
    id: 120,
    category: "NFC Cards",
    question: "Can the NFC card be used multiple times?",
    answer: (
      <>
        Yes, the NFC card can be used as many times as needed. Once issued, it
        remains active and can provide continuous access to event data, such as
        photos and videos, until the event data is removed or updated.
      </>
    ),
    accordion_id: "headingOneHundredTwenty",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwenty",
    aria_controls: "collapseOneHundredTwenty",
  },
  {
    id: 121,
    category: "NFC Cards",
    question: "What happens if I lose my NFC card?",
    answer: (
      <>
        If you lose your NFC card, you can freeze it immediately through the
        app. This ensures that no unauthorized person can access the data stored
        on the card, keeping your information secure.
      </>
    ),
    accordion_id: "headingOneHundredTwentyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyOne",
    aria_controls: "collapseOneHundredTwentyOne",
  },
  {
    id: 122,
    category: "NFC Cards",
    question: "How do I freeze my NFC card if it's lost?",
    answer: (
      <>
        If your NFC card is lost, you can easily freeze it using the app or
        website. Freezing the card will prevent anyone from accessing your event
        data, giving you peace of mind until the card is recovered or replaced.
      </>
    ),
    accordion_id: "headingOneHundredTwentyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyTwo",
    aria_controls: "collapseOneHundredTwentyTwo",
  },
  {
    id: 123,
    category: "Scheduling",
    question: "What is the Scheduling feature?",
    answer: (
      <>
        The Scheduling feature allows photographers and event organizers to plan
        and organize events, manage tasks, and assign schedules to crew members.
        It helps streamline workflow and ensures all parties involved are on the
        same page regarding event timelines.
      </>
    ),
    accordion_id: "headingOneHundredTwentyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyThree",
    aria_controls: "collapseOneHundredTwentyThree",
  },
  {
    id: 124,
    category: "Scheduling",
    question: "Can I assign schedules to specific team members?",
    answer: (
      <>
        Yes, you can assign schedules to specific team members, ensuring that
        each individual knows their responsibilities and timing for the event.
        Team members will receive updates through push notifications or email.
      </>
    ),
    accordion_id: "headingOneHundredTwentyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyFour",
    aria_controls: "collapseOneHundredTwentyFour",
  },
  {
    id: 125,
    category: "Scheduling",
    question: "Can I create a custom schedule for each event?",
    answer: (
      <>
        Yes, you can create a custom schedule for each event, including
        timelines for preparation, photography sessions, client meetings, and
        other key activities. The feature ensures you can manage multiple events
        simultaneously.
      </>
    ),
    accordion_id: "headingOneHundredTwentyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyFive",
    aria_controls: "collapseOneHundredTwentyFive",
  },
  {
    id: 126,
    category: "Scheduling",
    question: "How do I notify team members about their schedules?",
    answer: (
      <>
        Team members are automatically notified about their schedules through
        push notifications or via email. You can also send reminders to ensure
        everyone is prepared for their tasks on time.
      </>
    ),
    accordion_id: "headingOneHundredTwentySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentySix",
    aria_controls: "collapseOneHundredTwentySix",
  },
  {
    id: 127,
    category: "Scheduling",
    question: "Can I adjust the schedule if things change?",
    answer: (
      <>
        Yes, you can easily adjust the schedule if any changes occur. The system
        allows you to update times, add new tasks, or shift responsibilities,
        and your team members will receive updated notifications.
      </>
    ),
    accordion_id: "headingOneHundredTwentySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentySeven",
    aria_controls: "collapseOneHundredTwentySeven",
  },
  {
    id: 128,
    category: "Scheduling",
    question: "Can I view the entire team's schedule in one place?",
    answer: (
      <>
        Yes, you can view the entire team's schedule in one centralized
        location. This feature makes it easy to track all activities, ensure no
        overlap, and keep everyone aligned on their tasks and deadlines.
      </>
    ),
    accordion_id: "headingOneHundredTwentyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyEight",
    aria_controls: "collapseOneHundredTwentyEight",
  },
  {
    id: 129,
    category: "Scheduling",
    question: "How does the scheduling feature help with event planning?",
    answer: (
      <>
        The scheduling feature helps with event planning by providing a clear
        and organized timeline of events. You can ensure that each task is
        completed on time, that resources are allocated efficiently, and that no
        deadlines are missed.
      </>
    ),
    accordion_id: "headingOneHundredTwentyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredTwentyNine",
    aria_controls: "collapseOneHundredTwentyNine",
  },
  {
    id: 130,
    category: "Scheduling",
    question: "Can I create recurring schedules for regular events?",
    answer: (
      <>
        Yes, you can create recurring schedules for regular events, such as
        weekly photo sessions or monthly client meetings. This feature saves
        time by allowing you to set up schedules in advance and have them
        automatically repeat.
      </>
    ),
    accordion_id: "headingOneHundredThirty",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirty",
    aria_controls: "collapseOneHundredThirty",
  },
  {
    id: 131,
    category: "Scheduling",
    question: "Does the scheduling feature integrate with other tools?",
    answer: (
      <>
        Yes, the scheduling feature can integrate with other tools, such as
        calendars and task management apps, to streamline workflows and ensure
        that all scheduling data is centralized and up-to-date.
      </>
    ),
    accordion_id: "headingOneHundredThirtyOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyOne",
    aria_controls: "collapseOneHundredThirtyOne",
  },
  {
    id: 132,
    category: "Finance Tracking",
    question: "What is the Finance Tracking feature?",
    answer: (
      <>
        The Finance Tracking feature helps photographers and event organizers
        monitor their income and expenses. It provides a comprehensive view of
        financial activities, making it easier to manage budgets and ensure the
        business stays profitable.
      </>
    ),
    accordion_id: "headingOneHundredThirtyTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyTwo",
    aria_controls: "collapseOneHundredThirtyTwo",
  },
  {
    id: 133,
    category: "Finance Tracking",
    question: "How does the Finance Tracking feature help me?",
    answer: (
      <>
        The feature allows you to track all income and expenses, categorize them
        for easy analysis, and generate reports. This helps you stay on top of
        your finances, ensuring you can make informed decisions and maintain
        financial health.
      </>
    ),
    accordion_id: "headingOneHundredThirtyThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyThree",
    aria_controls: "collapseOneHundredThirtyThree",
  },
  {
    id: 134,
    category: "Finance Tracking",
    question: "Can I track both income and expenses?",
    answer: (
      <>
        Yes, you can track both income and expenses. The system lets you record
        incoming payments from clients, as well as any outgoing costs related to
        the event, such as travel, equipment, and staff payments.
      </>
    ),
    accordion_id: "headingOneHundredThirtyFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyFour",
    aria_controls: "collapseOneHundredThirtyFour",
  },
  {
    id: 135,
    category: "Finance Tracking",
    question: "Can I generate financial reports?",
    answer: (
      <>
        Yes, you can generate detailed financial reports that summarize your
        income, expenses, and profits. These reports can be used for tax
        purposes, business analysis, or to evaluate the financial health of your
        photography business.
      </>
    ),
    accordion_id: "headingOneHundredThirtyFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyFive",
    aria_controls: "collapseOneHundredThirtyFive",
  },
  {
    id: 136,
    category: "Finance Tracking",
    question: "Is there a way to categorize my expenses?",
    answer: (
      <>
        Yes, you can categorize your expenses, such as travel, equipment, and
        marketing costs. This feature makes it easier to analyze your spending
        and find areas where you could potentially save or invest more.
      </>
    ),
    accordion_id: "headingOneHundredThirtySix",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtySix",
    aria_controls: "collapseOneHundredThirtySix",
  },
  {
    id: 137,
    category: "Finance Tracking",
    question: "Can I track payments from clients in real-time?",
    answer: (
      <>
        Yes, the Finance Tracking feature allows you to track client payments in
        real-time. You’ll get an up-to-date view of how much has been paid and
        how much is still due, helping you stay organized and avoid missed
        payments.
      </>
    ),
    accordion_id: "headingOneHundredThirtySeven",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtySeven",
    aria_controls: "collapseOneHundredThirtySeven",
  },
  {
    id: 138,
    category: "Finance Tracking",
    question: "Can I set up payment reminders for clients?",
    answer: (
      <>
        Yes, you can set up automated payment reminders to notify clients about
        upcoming or overdue payments. This feature ensures you never forget to
        remind clients about outstanding balances.
      </>
    ),
    accordion_id: "headingOneHundredThirtyEight",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyEight",
    aria_controls: "collapseOneHundredThirtyEight",
  },
  {
    id: 139,
    category: "Finance Tracking",
    question: "Can I integrate finance tracking with accounting software?",
    answer: (
      <>
        Yes, the Finance Tracking feature can integrate with various accounting
        software tools, making it easier to manage your finances and generate
        tax-ready reports. This integration saves time and reduces the risk of
        errors.
      </>
    ),
    accordion_id: "headingOneHundredThirtyNine",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredThirtyNine",
    aria_controls: "collapseOneHundredThirtyNine",
  },
  {
    id: 140,
    category: "Finance Tracking",
    question: "Can I track expenses for multiple events?",
    answer: (
      <>
        Yes, you can track expenses for each individual event. This feature
        helps you monitor the costs associated with specific projects, making it
        easier to evaluate profitability and plan for future events.
      </>
    ),
    accordion_id: "headingOneHundredForty",
    collapsed: "collapsed",
    data_bs_target: "#collapseOneHundredForty",
    aria_controls: "collapseOneHundredForty",
  },

  {
    id: 141,
    category: "Data Backup Pricing",
    question: "What factors influence the cost of data backup services?",
    answer:
      "The cost of data backup services is influenced by several factors, including the amount of data to be backed up, the frequency of backups, the level of security and encryption required, the number of users or devices to be supported, and the duration of data retention. Additionally, the choice between local and cloud-based backup solutions can also impact pricing.",
    accordion_id: "headingOne",
    collapsed: "collapsed",
    data_bs_target: "#collapseOne",
    aria_controls: "collapseOne",
  },
  {
    id: 142,
    category: "Data Backup Pricing",
    question:
      "Are there any additional fees beyond the monthly subscription for data backup services?",
    answer:
      "Some data backup providers may charge additional fees for services such as setup, data restoration, or advanced features like extended version history. It's important to review the service agreement to understand all potential costs associated with the backup service.",
    accordion_id: "headingTwo",
    collapsed: "collapsed",
    data_bs_target: "#collapseTwo",
    aria_controls: "collapseTwo",
  },
  {
    id: 143,
    category: "Data Backup Pricing",
    question:
      "How does the cost of data backup compare to the potential cost of data loss?",
    answer:
      "Investing in data backup services can be significantly more cost-effective than the potential expenses associated with data loss. For instance, the Ponemon 2020 report found that the average total cost of a data breach for businesses with more than 25,000 employees was $5.52 million. In contrast, comprehensive online backup services can cost as little as $100–$150 per year, highlighting the financial benefits of proactive data protection.",
    accordion_id: "headingThree",
    collapsed: "collapsed",
    data_bs_target: "#collapseThree",
    aria_controls: "collapseThree",
  },
  {
    id: 144,
    category: "Data Backup Pricing",
    question:
      "Do data backup services offer scalability to accommodate growing data needs?",
    answer:
      "Yes, many data backup services offer scalable solutions that allow businesses to adjust their storage capacity as their data requirements grow. This flexibility ensures that businesses can expand their backup solutions in line with their evolving data needs without incurring unnecessary costs.",
    accordion_id: "headingFour",
    collapsed: "collapsed",
    data_bs_target: "#collapseFour",
    aria_controls: "collapseFour",
  },
  {
    id: 145,
    category: "Data Backup Pricing",
    question:
      "Are there any discounts available for long-term commitments or larger data volumes?",
    answer:
      "Some data backup providers offer discounts for long-term commitments or for backing up larger volumes of data. For example, pre-paying for a year may result in an additional 10% off the regular price. It's advisable to inquire directly with the service provider to explore any available discounts or customized pricing options.",
    accordion_id: "headingFive",
    collapsed: "collapsed",
    data_bs_target: "#collapseFive",
    aria_controls: "collapseFive",
  },
];

export default answer_question_data;
