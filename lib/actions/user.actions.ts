'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'

import { handleError } from '@/lib/utils'

import { CreateUserParams, UpdateUserParams, UpdateUserSetingsParams, UpdateUserToken } from '@/types'

export async function updateGianaBusinessInfo() {
  try {
    await connectToDatabase();

    const businessInfo = {
      status: "Admin",
      businessname: "Giana Turkey Wear",
      aboutbusiness: "Elegant Turkey fashion wear and ladies collections.",
      businessaddress: "Nairobi CBD, Kenya",
      latitude: "-1.2827827",
      longitude: "36.8231172",
      businessworkingdays: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      phone: "+254705912478",
      whatsapp: "+254705912478",
      website: "gianaturkeywear.co.ke",
      facebook: "https://www.facebook.com/profile.php?id=100087734697007&rdid=yptCfKGXsfRCoRqj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CpqeaXyk8%2F#",
      twitter: "",
      instagram: "https://www.instagram.com/giana_fashion1?igsh=MWN1dHR5cHc1Njhpag%3D%3D",
      tiktok: "https://www.tiktok.com/@gyianaturkeywear?_r=1&_t=ZS-9684D9qqNKW",
      imageUrl: "/assets/images/logo.png",
      businesshours: {
        openHour: "08",
        openMinute: "30",
        closeHour: "20",
        closeMinute: "00",
      },
      verified: [
        {
          accountverified: false,
          verifieddate: new Date(),
        },
      ],
    };

    const updatedUser = await User.findOneAndUpdate(
      {
        $or: [
          { email: "weargiana@gmail.com" },
          { clerkId: "user_3DLJQXTxjXqBwsopWRVFPWAdGCM" },
        ],
      },
      { $set: businessInfo },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Giana Wear user not found");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}
export async function createUserr(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user, { verified: [{ accountverified: false, verifieddate: Date() }] },)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}
export async function getUserDetails(userId?: string) {
  try {
    await connectToDatabase();

    let user = null;

    if (userId) {
      user = await User.findById(userId);
      // ❌ REMOVE this:
      // if (!user) throw new Error("User not found");
    }

    const adminUser = await User.findOne({ status: "Admin" });

    return JSON.parse(
      JSON.stringify({
        user: user || null,
        adminUser: adminUser || null,
      })
    );
  } catch (error) {
    handleError(error);
  }
}
export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')

    // Fetch verification fee
    //const verifyData = await Verifies.findOne() // adjust if you have a different criteria
    const fee = 500
    //console.log(fee);
    return JSON.parse(JSON.stringify({ ...user.toObject(), fee }))



    //  return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}
export async function getAdminProfile() {
  try {
    await connectToDatabase()
    const condition = { email: "mwanjiku298@gmail.com" };
    const comp = await User.findOne(condition)

    if (!comp) throw new Error('User not found')

    // Fetch verification fee
    return JSON.parse(JSON.stringify({ comp }))

  } catch (error) {
    handleError(error)
  }
}
export async function getAllUsers(limit: number, page: number) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit;
    // Fetch filtered orders with pagination
    const user = await User.find()
      .skip(skipAmount)
      .limit(limit);
    // Get the count of documents that match the conditions
    const AdCount = await User.countDocuments();
    //console.log({ data: JSON.parse(JSON.stringify(user)), totalPages: Math.ceil(AdCount / limit) })
    return { data: JSON.parse(JSON.stringify(user)), totalPages: Math.ceil(AdCount / limit) }
  } catch (error) {
    handleError(error)
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase()

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}
export async function updateUserToken(userId: string, user: UpdateUserToken) {
  try {
    await connectToDatabase();

    // Find the user by ID
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      throw new Error("User not found");
    }

    // Check if the FCM token already exists
    if (existingUser.token !== user.fcmToken) {
      // Update the user's FCM token
      existingUser.token = user.fcmToken;
      // Save the updated user data
      const updatedUser = await existingUser.save();

      if (!updatedUser) throw new Error("User update failed");

      return JSON.parse(JSON.stringify(updatedUser));
    }

    // If the token already exists, return the existing user data
    return JSON.parse(JSON.stringify(existingUser));
  } catch (error) {
    handleError(error);
  }
}
export async function updateUserFromSettings({ user, path }: UpdateUserSetingsParams) {
  try {
    await connectToDatabase()
    //console.log(user);
    const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true })

    if (!updatedUser) throw new Error('User update failed')
    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase()

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    // Unlink relationships


    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}
// USE CREDITS
export async function updateVerification(userId: string) {
  try {
    await connectToDatabase();
    //console.log("update userId: "+userId+" Date:"+Date());
    const updatedUserVerifiction = await User.findOneAndUpdate(
      { _id: userId },
      { verified: [{ accountverified: true, verifieddate: Date() }] },
      { new: true }
    )
    if (!updatedUserVerifiction) throw new Error("User Verification update failed");

    return JSON.parse(JSON.stringify(updatedUserVerifiction));
  } catch (error) {
    handleError(error);
  }
}
